import * as Yup from 'yup';
import Restaurant from '../../models/Restaurant';

import pagarme from 'pagarme';
import { api_key } from '../../../config/pagarme';

class RestaurantController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const restaurants = await Restaurant.findAll({
      where: { professional_account_id: req.accountId },
      order: [['createdAt', 'DESC']],
      // limit: 10,
      // offset: (page - 1) * 20
    });

    return res.json(restaurants);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      social_reason: Yup.string().required(),
      name: Yup.string().required(),
      telephone: Yup.number().required(),
      cep: Yup.number().required(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      neighborhood: Yup.string().required(),
      address: Yup.string().required(),
      number: Yup.number(),
      bank_code: Yup.string().required(),
      agency: Yup.string().required(),
      account: Yup.string().required(),
      account_dv: Yup.string().required(),
      cnpj: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const cnpjAlreadyExists = await Restaurant.findOne({
      where: { cnpj: req.body.cnpj.toString() },
    });

    if (cnpjAlreadyExists) {
      return res.status(409).json({ error: 'CNPJ já cadastrado' });
    }

    const { social_reason, bank_code, agency, account, account_dv, cnpj } = req.body;

    let recipient_id = '';
    try {
      await pagarme.client
      .connect({ api_key })
      .then(client =>
        client.recipients.create({
          transfer_enabled: true,
          transfer_interval: 'monthly',
          transfer_day: 5,
          automatic_anticipation_enabled: false,
          anticipatable_volume_percentage: 0,
          bank_account: {
            bank_code,
            agencia: agency,
            conta: account,
            type: 'conta_corrente',
            conta_dv: account_dv,
            document_number: cnpj,
            legal_name: social_reason
          }
        })
      )
      .then(recipient => {
        recipient_id = recipient.id;
      });
    } catch (err) {
      return res.status(400).json(err);
    }

    const { id, name } = await Restaurant.create({
      ...req.body,
      professional_account_id: req.accountId,
      recipient_id
    });

    return res.status(200).json({ id, name, social_reason });
  }
}

export default new RestaurantController();
