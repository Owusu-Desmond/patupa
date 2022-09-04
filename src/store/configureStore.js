import { combineReducers, configureStore } from '@reduxjs/toolkit';
import slideShowReducer from './slideShow/slideShow';
import productsReducer from './products/products';

const rootReducer = combineReducers({
  products: productsReducer,
  slideShow: slideShowReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
