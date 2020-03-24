import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logoImg from '~/assets/logo_img.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    fullName: Yup.string().required('Insira seu nome completo'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatoria'),
    cnpj: Yup.number('Insira um CNPJ Válido').required('Insira um CNPJ'),
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logoImg} alt="PleezApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="fullName" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <Input name="cnpj" placeholder="Seu CNPJ" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui uma conta?</Link>
      </Form>
    </>
  );
}
