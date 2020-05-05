import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.png';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'No mínimo 6 caracteres'),
    cpf: Yup.string()
      .required('O CPF é obrigatório')
      .min(11),
    phone: Yup.string()
      .required('O celular é obrigatório')
      .min(8, 'Digite um celular válido'),
  });

  function handleSubmit({ name, email, password, cpf, phone }) {
    const formattedCPF = cpf.split('-').join('').split('.').join('');

    dispatch(signUpRequest({ name, email, password, cpf: formattedCPF, phone }));
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
          <Input name="name" type="text" placeholder="Seu nome completo" />
          <Input name="email" type="email" placeholder="Seu e-mail" />
          <Input name="password" type="password" placeholder="Sua senha" />
          <Input name="cpf" type="text" placeholder="Seu CPF (apenas números)" />
          <Input name="phone" type="text" placeholder="Seu celular com DDD"/>
          <button type="submit">Cadastrar</button>
          <Link to="/"> Já possui uma conta? </Link>
        </Form>
      </div>
    </>
  );
}
