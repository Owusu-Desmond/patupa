const GET_USER_DETAILS = 'GET_USER_DETAILS';

const initialState = {
  profile: null,
  error: '',
};

export const getUserDetails = (payload) => ({
  type: GET_USER_DETAILS,
  payload,
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        profile: action.payload.profile,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
