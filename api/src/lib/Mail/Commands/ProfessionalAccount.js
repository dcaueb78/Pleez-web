import Mail from '../index';
import { noReplySender } from '../SendersDetails';

const SendProfessionalAccountWelcomeMail = async ({ name, email }) => {
  await Mail.sendMail({
    to: `${name} <${email}>`,
    from: noReplySender.create({ title: 'PleezApp' }),
    subject: `Faaala ${name}, seja bem-vindo!`,
    template: 'createProfessionalAccount',
    context: {
      user: name
    }
  });
};

export { SendProfessionalAccountWelcomeMail };
