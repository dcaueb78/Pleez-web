import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import ProfessionalAccount from '../models/ProfessionalAccount';

class ProfessionalAccountSessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { email, password } = req.body;

    const professionalAccount = await ProfessionalAccount.findOne({
      where: { email }
    });

    if (!professionalAccount) {
      return res.status(401).json({ error: 'Professional Account not found' });
    }

    if (!(await professionalAccount.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = professionalAccount;

    return res.json({
      professionalAccount: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new ProfessionalAccountSessionController();
