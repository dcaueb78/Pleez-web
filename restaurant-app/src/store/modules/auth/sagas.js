import React from 'react';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'professional-account/session', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error(
      <div>
        Houve um problema na autenticação :(
        <br /> Poderia conferir os seus dados?
      </div>
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { fullName, email, password, cnpj } = payload;

    yield call(api.post, 'professional-account', {
      name: fullName,
      email,
      password,
      cnpj,
    });

    toast.success('Cadastrado com sucesso :D');

    history.push('/');
  } catch (err) {
    toast.error(
      <div>
        Houve um problema no cadastro :(
        <br /> Poderia verificar os seus dados?
      </div>
    );

    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
