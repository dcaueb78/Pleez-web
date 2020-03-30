import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import account from './account/sagas';

export default function* rootSaga() {
  return yield all([auth, account]);
}
