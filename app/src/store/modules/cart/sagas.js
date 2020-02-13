import React from 'react';
import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function addToCart({ payload }) {
  if (!payload) return;

  history.goBack(3);
}

export default all([takeLatest('@cart/ADD_TO_CART', addToCart)]);
