import * as Yup from 'yup';

import pagarme from 'pagarme';
import { api_key, pleez_recipient_id } from '../../../config/pagarme';

import Order from '../../schemas/Order';
import Dish from '../../models/Dish';
import User from '../../models/User';
import Restaurant from '../../models/Restaurant';

class OrderController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const pageLimit = 10;

    const orders = await Order.find({
      user_id: req.userId
    })
      .sort({
        createdAt: 'desc'
      })
      .limit(pageLimit)
      .skip((page - 1) * 10);

    return res.json(orders);
  }

  async update(req, res) {

    const { orderId, status } = req.body;
    const order = await Order.findByIdAndUpdate(
      { _id: orderId },
      {
        status
      }
    );

    return res.json({status, orderId});
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      dishes: Yup.array().required(),
      restaurant_id: Yup.number().required(),
      chair: Yup.number().required(),
      creditCard: Yup.object().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const userDetails = await User.findByPk(req.userId);

    const { dishes } = req.body;

    const totalPrice = dishes
      .map(dish => dish.price * dish.quantity)
      .reduce((a, b) => a + b, 0);

    const card = {
      card_number: req.body.creditCard.number.split(' ').join(''),
      card_holder_name: req.body.creditCard.name,
      card_expiration_date: req.body.creditCard.expiry.replace('/', ''),
      card_cvv: req.body.creditCard.cvc
    };

    let cardHash = '';
    await pagarme.client
      .connect({ api_key })
      .then(client => client.security.encrypt(card))
      .then(card_hash => {
        cardHash = card_hash;
      });

    const { recipient_id } = await Restaurant.findByPk(req.body.restaurant_id);

    let transaction_id = '';
    await pagarme.client
      .connect({ api_key })
      .then(client =>
        client.transactions.create({
          amount: totalPrice.toFixed(2).replace('.', ''),
          card_hash: cardHash,
          payment_method: 'credit_card',
          customer: {
            external_id: `#${userDetails.id}`,
            name: userDetails.name,
            type: 'individual',
            country: 'br',
            email: userDetails.email,
            documents: [
              {
                type: 'cpf',
                number: '30621143049'
              }
            ],
            phone_numbers: ['+5511999998888', '+5511888889999']
          },
          items: dishes.map(dish => ({
            id: `${dish.id}`,
            title: dish.name,
            unit_price: dish.price.toFixed(2).replace('.', ''),
            quantity: dish.quantity,
            tangible: false
          })),
          split_rules: [
            {
              recipient_id: pleez_recipient_id,
              percentage: 1,
              liable: true,
              charge_processing_fee: true
            },
            {
              recipient_id,
              percentage: 99,
              liable: false,
              charge_processing_fee: true
            }
          ]
        })
      )
      .then(transaction => {
        if (transaction.status === 'paid') {
          transaction_id = transaction.id;
        } else {
          return res.status(402).json({ error: 'Pagamento recusado' });
        }
        return transaction_id;
      });

    async function findDishDetailsById(id) {
      const dishDetails = await Dish.findByPk(id);
      return dishDetails;
    }

    let priceTemp = 0;
    await Promise.all(
      req.body.dishes.map(async dish => {
        const dishDetails = await findDishDetailsById(dish.id);
        priceTemp += dishDetails.price * dish.quantity;
      })
    );

    const { id, status, chair } = await Order.create({
      ...req.body,
      user_id: req.userId,
      total_price: priceTemp,
      transaction_id
    });

    return res.status(200).json({ id, status, chair });
  }
}

export default new OrderController();
