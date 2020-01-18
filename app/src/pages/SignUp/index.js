import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'No mínimo 6 caracteres')
  });

  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Pleez" />

      <div>
        <h1>Sua primeira vez aqui?</h1>
        <div>
          <span>
            Faça seu cadastro e comece a usar o serviço de pedidos mais rápido
            que você já viu!
          </span>
        </div>

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Seu nome" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Cadastrar</button>
          <Link to="/"> Já possui uma conta? </Link>
        </Form>
      </div>
    </>
  );
}
