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

    const { token, professionalAccount } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, professionalAccount));
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
    const { fullName, email, password } = payload;

    yield call(api.post, 'professional-account', {
      name: fullName,
      email,
      password,
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

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
