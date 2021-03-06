import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);

const persiststor = persistStore(store);
export {store, persiststor};
