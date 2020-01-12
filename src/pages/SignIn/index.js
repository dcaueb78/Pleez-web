import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

// import { Container } from './styles';

export default function SignIn() {
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
        <form>
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit">Acessar</button>
          <Link to="registro"> Criar conta gratuita </Link>
        </form>
      </div>
    </>
  );
}
