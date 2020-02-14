import * as Yup from 'yup';
import Dish from '../models/Dish';

class DishDetailsController {
  async index(req, res) {
    const schema = Yup.object().shape({
      dish_id: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const dishDetails = await Dish.findByPk(req.params.dish_id);

    if (!dishDetails) {
      return res.status(401).json({ error: 'Dish not found' });
    }

    return res.json(dishDetails);
  }

  async indexAll(req, res) {
    const schema = Yup.object().shape({
      dishes_id: Yup.array().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const dishesDetails = await Dish.findAll({
      where: {
        id: req.body.dishes_id
      }
    });

    return res.json(dishesDetails);
  }
}

export default new DishDetailsController();
