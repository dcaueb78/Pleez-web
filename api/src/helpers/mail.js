function sendMail() {
  await Queue.add(CreateProfessionalAccountMail.key, {
    name,
    email
  });
};

export default sendMail();
