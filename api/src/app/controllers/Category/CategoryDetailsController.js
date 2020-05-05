import * as Yup from 'yup';
import Category from '../../models/Category';

class CategoryDetailsController {
  async index(req, res) {

    const schema = Yup.object().shape({
      category_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const category = await Category.findByPk(req.params.category_id);

    if(!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const { name, id, image_url } = category;

    return res.status(200).json({ name, id, image_url });
  }
}

export default new CategoryDetailsController();
