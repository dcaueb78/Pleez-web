import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'restaurant_pleez',
      storage,
      whitelist: ['auth', 'account'],
    },
    reducers
  );

  return persistedReducer;
};
