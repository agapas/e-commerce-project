import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from "redux-persist/lib/storage/session";

import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';

const cartItemsConfig = {
  key: 'cart',
  storage: sessionStorage,
  whitelist: ['cartItems'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: persistReducer(cartItemsConfig, cartReducer),
});

export default rootReducer;
