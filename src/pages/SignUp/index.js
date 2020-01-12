import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignUp() {
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

        <Form onSubmit={handleSubmit}>
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
