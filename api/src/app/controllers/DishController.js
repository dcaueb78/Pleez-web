import * as Yup from 'yup';
import Dish from '../models/Dish';

class DishController {
  async index(req, res) {
    return res.json({ oi: 'oi' });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      details: Yup.string().required(),
      price: Yup.number().required(),
      restaurant_id: Yup.number().required(),
      category_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { id, name } = await Dish.create({
      ...req.body,
      is_available: true
    });

    return res.status(200).json({ id, name });
  }
}

export default new DishController();
