import { combineReducers, configureStore } from '@reduxjs/toolkit';
import slideShowReducer from './slideShow/slideShow';
import productsReducer from './products/products';
import cartReducer from './cart/cart';
import userReducer from './user/user';

const rootReducer = combineReducers({
  products: productsReducer,
  slideShow: slideShowReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
