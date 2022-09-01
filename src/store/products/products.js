import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FakeStoreAPI = 'https://fakestoreapi.com/';

const fetchProducts = createAsyncThunk(FETCH_PRODUCTS, async () => {
  const { data } = await axios.get(`${FakeStoreAPI}products`);
  return data;
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_PRODUCTS}/fulfilled`:
      // make a copy of the state
      return action.payload;
    default:
      return state;
  }
};

export { fetchProducts };
export default reducer;
