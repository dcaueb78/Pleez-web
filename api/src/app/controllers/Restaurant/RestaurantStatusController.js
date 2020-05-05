import * as Yup from 'yup';
import Restaurant from '../../models/Restaurant';

import { getUpdatedRestaurantStatus } from '../../../utils/restaurantStatus';

class RestaurantStatusController {
  async index(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required()
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { status } = await Restaurant.findByPk(req.params.id);

    return res.status(200).json(status);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const selectedRestaurant = await Restaurant.findByPk(req.body.id);
    if (!selectedRestaurant) {
      return res.status(400).json({ error: 'Restaurant not found' });
    }

    const updatedStatus = getUpdatedRestaurantStatus(selectedRestaurant.status);
    const { status } = await selectedRestaurant.update({ status: updatedStatus });

    return res.status(200).json(status);
  }
}

export default new RestaurantStatusController();
