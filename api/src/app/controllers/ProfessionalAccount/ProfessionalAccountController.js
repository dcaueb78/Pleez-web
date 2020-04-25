import * as Yup from 'yup';
import ProfessionalAccont from '../../models/ProfessionalAccount';
import Mail from '../../../lib/Mail';

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
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }
    const professionalAccontExists = await ProfessionalAccont.findOne({
      where: { email: req.body.email }
    });

    if (professionalAccontExists) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const { id, name, email } = await ProfessionalAccont.create(req.body);

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Bem-vindo à Pleez',
      template: 'createProfessionalAccount',
      context: {
        user: name,
      }
    })

    return res.json({
      id,
      name,
      email
    });
  }
}

export default new ProfessionalAccountController();
