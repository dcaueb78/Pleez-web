import { takeLatest, all } from 'redux-saga/effects';

import history from '~/services/history';

export function addToBasket({ payload }) {
  if (!payload) return;

  history.goBack(3);
}

export default all([takeLatest('@basket/ADD_TO_BASKET', addToBasket)]);
