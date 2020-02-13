import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import basket  from './basket/reducer';

export default combineReducers({
  auth,
  user,
  basket
});
