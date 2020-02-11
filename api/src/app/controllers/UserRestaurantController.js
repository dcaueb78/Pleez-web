import * as Yup from 'yup';
import Restaurant from '../models/Restaurant';

class UserRestaurantController {
  async index(req, res) {

    const schema = Yup.object().shape({
      restaurant_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const restaurant = await Restaurant.findByPk(req.params.restaurant_id);

    if(!restaurant) {
      return res.status(401).json({ error: 'Restaurant not found' });
    }

    const { name, id } = restaurant;

    return res.json({ name, id });
  }
}

export default new UserRestaurantController();
