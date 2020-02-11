import * as Yup from 'yup';
import Order from '../schemas/Order';

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
      comment: Yup.string().required(),
      dish: Yup.array().required(),
      total_price: Yup.number().required(),
      restaurant_id: Yup.number().required(),
      user_id: Yup.number().required(),
      chair: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { id, status, chair } = await Order.create({
      ...req.body
    });

    return res.status(200).json({ id, status, chair });
  }
}

export default new OrderController();
