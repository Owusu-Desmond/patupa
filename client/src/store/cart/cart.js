const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ONE = 'REMOVE_ONE';
const DELECT_FROM_CART = 'DELECT_FROM_CART';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELECT_FROM_CART,
  payload: productId,
});

export const removeOne = (product) => ({
  type: REMOVE_ONE,
  payload: product,
});

const cartReducer = (state = [], action) => {
  const product = state.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case ADD_TO_CART:
      // check if the product is already in the cart
      if (product) {
        // if product is already in the cart, increase the count
        return state.map((item) => {
          if (item.id === action.payload.id) {
            if (item.count < 10) {
              return {
                ...item,
                count: item.count + 1,
              };
            }
          }
          return item;
        });
      }
      // if product is not in the cart, add it to the cart
      return [...state, { ...action.payload, count: 1 }];

    case REMOVE_ONE:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          if (item.count > 1) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
        }
        return item;
      });
    case DELECT_FROM_CART:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default cartReducer;
