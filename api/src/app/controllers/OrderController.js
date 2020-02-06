import * as Yup from 'yup';
import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    return res.json('ok');
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      total_price: Yup.number().required(),
      restaurant_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    console.log(req.body);
    const { id, name } = await Order.create({
      ...req.body,
      status: 0
    });

    return res.status(200).json({ id, name });
  }
}

export default new OrderController();
