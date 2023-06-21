const SET_INDEX = 'SET_INDEX';

export const setIndex = (index) => ({
  type: SET_INDEX,
  payload: index,
});

const slideShowReducer = (state = 0, action) => {
  switch (action.type) {
    case SET_INDEX:
      return action.payload;
    default:
      return state;
  }
};
export default slideShowReducer;
