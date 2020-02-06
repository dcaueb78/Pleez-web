import * as Yup from 'yup';
import Category from '../models/Category';

class CategoryController {
  async index(req, res) {
    return res.json({ oi: 'oi' });
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      restaurant_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { id, name } = await Category.create({
      ...req.body,
      is_available: true
    });

    return res.status(200).json({ id, name });
  }
}

export default new CategoryController();
