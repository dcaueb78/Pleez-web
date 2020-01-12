import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';

export default function SignUp() {
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
        <form>
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />

          <button type="submit">Cadastrar</button>
          <Link to="/"> Já possui uma conta? </Link>
        </form>
      </div>
    </>
  );
}
