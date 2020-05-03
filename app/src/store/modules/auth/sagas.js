import React from 'react';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/config/api';

import { base } from '~/services/api/pages';

import { sessions, users } from '~/services/api/endPoints';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, sessions, {
      email,
      password
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Brearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push();
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
    const { name, email, password, cpf, phone } = payload;

    yield call(api.post, users, {
      name,
      email,
      password,
      cpf,
      phone
    });

    toast.success('Cadastrado com sucesso :D');

    history.push(base);
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

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);
