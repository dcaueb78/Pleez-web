import Mail from '../../lib/Mail';

class CreateProfessionalAccountMail {
  get key() {
    return 'CreateProfessionalAccountMail';
  }

  async handle({ data }) {
    const { name, email } = data;

    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: `Faaala ${name}, seja bem-vindo!`,
      template: 'createProfessionalAccount',
      context: {
        user: name
      }
    });
  }
}

export default new CreateProfessionalAccountMail();
