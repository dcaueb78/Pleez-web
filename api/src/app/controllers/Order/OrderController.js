import * as Yup from 'yup';
import Order from '../../schemas/Order';
import Dish from '../../models/Dish';
import User from '../../models/User';

import pagarme from 'pagarme';

import { api_key } from '../../../config/pagarme';

class OrderController {
  async index(req, res) {
    const schema = Yup.object().shape({
      userId: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const orders = await Order.find({
      user_id: req.params.userId
    })
      .sort('createdAt')
      .limit(10);

    return res.json(orders);
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

    // console.log(totalPrice.toFixed(2).replace('.', ''));

    let cardHash = '';

    const card = {
      card_number: req.body.creditCard.number.split(' ').join(''),
      card_holder_name: req.body.creditCard.name,
      card_expiration_date: req.body.creditCard.expiry.replace('/', ''),
      card_cvv: req.body.creditCard.cvc
    };

    await pagarme.client
      .connect({ api_key })
      .then(client => client.security.encrypt(card))
      .then(card_hash => {
        cardHash = card_hash;
      });

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
            phone_numbers: ['+5511999998888', '+5511888889999'],
            // birthday: '1965-01-01'
          },
          billing: {
            name: 'Trinity Moss',
            address: {
              country: 'br',
              state: 'sp',
              city: 'Cotia',
              neighborhood: 'Rio Cotia',
              street: 'Rua Matrix',
              street_number: '9999',
              zipcode: '06714360'
            }
          },
          items: [
            {
              id: 'r123',
              title: 'Red pill',
              unit_price: totalPrice.toFixed(2).replace('.', ''),
              quantity: 1,
              tangible: false
            }
          ]
        })
      )
      .then(transaction => {
        transaction_id = transaction.id;
        // console.log(transaction);
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
