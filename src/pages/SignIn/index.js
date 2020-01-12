import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Pleez" />

      <div>
        <h1>Acesse sua conta</h1>
        <div>
          <span>
            Comece a usar o serviço de pedidos mais rápido que você já viu!
          </span>
        </div>
        <Form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
          <Link to="registro"> Criar conta gratuita </Link>
        </Form>
      </div>
    </>
  );
}
