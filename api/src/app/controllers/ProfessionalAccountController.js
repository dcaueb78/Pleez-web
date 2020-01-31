import * as Yup from 'yup';
import ProfessionalAccont from '../models/ProfessionalAccount';

class ProfessionalAccountController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      cnpj: Yup.number()
        .required()
    });

    if (!(await schema.isValid(req.body))) {

      console.log(req.body);
      return res.status(400).json({ error: 'Falha de validação!' });
    }
    const ProfessionalAccontExists = await ProfessionalAccont.findOne({
      where: { email: req.body.email }
    });

    if (ProfessionalAccontExists) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const { id, name, email } = await ProfessionalAccont.create(req.body);

    return res.json({
      id,
      name,
      email
    });
  }
}

export default new ProfessionalAccountController();
