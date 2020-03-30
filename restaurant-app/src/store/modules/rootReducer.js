import { combineReducers } from 'redux';

import auth from './auth/reducer';
import account from './account/reducer';

export default combineReducers({
  auth,
  account,
});
