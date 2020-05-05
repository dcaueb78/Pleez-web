import * as Yup from 'yup';
import User from '../../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      cpf: Yup.string()
        .required()
        .min(11)
        .max(11),
      phone: Yup.string()
        .required()
        .min(8),
      password: Yup.string()
        .required()
        .min(6)
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (userExists) {
      return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const CPFAlreadyExists = await User.findOne({
      where: {
        cpf: req.body.cpf
      }
    });

    if (CPFAlreadyExists) {
      return res.status(400).json({ error: 'CPF já utilizado.'});
    }

    const { id, name, email, cpf } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      cpf
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      cpf: Yup.string()
        .min(11),
      phone: Yup.string()
        .min(8),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha de validação!' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'Email já utilizado!' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(400).json({ error: 'As senhas não correspondem!' });
    }

    const { id, name, cpf, phone } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      cpf,
      phone
    });
  }
}

export default new UserController();
