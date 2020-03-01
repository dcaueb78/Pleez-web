import * as Yup from 'yup';
import Order from '../../schemas/Order';
import Dish from '../../models/Dish';
import pagarme from 'pagarme';

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
    const card = {
      card_number: '4111111111111111',
      card_holder_name: 'abc',
      card_expiration_date: '1225',
      card_cvv: '123'
    };

    let cardHash = '';

    await pagarme.client
      .connect({ api_key: 'ak_test_W9wF4YHTEsW44xN7BRj3Rlc3L9ygoc' })
      .then(client => client.security.encrypt(card))
      .then(card_hash => {
        cardHash = card_hash;
      });

    let transaction_id = '';

    await pagarme.client
      .connect({ api_key: 'ak_test_W9wF4YHTEsW44xN7BRj3Rlc3L9ygoc' })
      .then(client =>
        client.transactions.create({
          amount: 100,
          card_hash: cardHash,
          customer: {
            external_id: '#3311',
            name: 'Morpheus Fishburne',
            type: 'individual',
            country: 'br',
            email: 'mopheus@nabucodonozor.com',
            documents: [
              {
                type: 'cpf',
                number: '30621143049'
              }
            ],
            phone_numbers: ['+5511999998888', '+5511888889999'],
            birthday: '1965-01-01'
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
              unit_price: 1,
              quantity: 1,
              tangible: false
            },
          ]
        })
      )
      .then(transaction => {
        transaction_id = transaction.id;
      });

    const schema = Yup.object().shape({
      dishes: Yup.array().required(),
      restaurant_id: Yup.number().required(),
      chair: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    async function findDishDetailsById (id) {
      const dishDetails = await Dish.findByPk(id);
      return dishDetails;
    }

    let priceTemp = 0;
    await Promise.all(req.body.dishes.map(async dish => {
      const dishDetails = await findDishDetailsById(dish.id);
      priceTemp += dishDetails.price * dish.quantity;
    }));

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
