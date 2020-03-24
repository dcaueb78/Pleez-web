import React from 'react';
import { Link } from 'react-router-dom';

import logo_img from '~/assets/logo_img.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo_img} alt="PleezApp" />

      <form>
        <input placeholder="Seu nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <input type="number" placeholder="Seu CNPJ" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já possui uma conta?</Link>
      </form>
    </>
  );
}
