import React from 'react';
import { Link } from 'react-router-dom';

import logo_img from '~/assets/logo_img.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo_img} alt="PleezApp" />

      <form>
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/registro">Criar conta gratuita</Link>
      </form>
    </>
  );
}
