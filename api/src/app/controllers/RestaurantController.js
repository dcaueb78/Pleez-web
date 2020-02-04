import * as Yup from 'yup';
import Restaurant from '../models/Restaurant';

class RestaurantController {
  async store(req, res) {
    const schema = Yup.object().shape({
      social_reason: Yup.string().required(),
      name: Yup.string().required(),
      telephone: Yup.number().required(),
      cep: Yup.number().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      neighborhood: Yup.string().required(),
      addres: Yup.string().required(),
      number: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { id, name, social_reason } = await Restaurant.create({
      ...req.body,
      professional_account_id: req.accountId
    });

    return res.status(200).json({ id, name, social_reason });
  }
}

export default new RestaurantController();
