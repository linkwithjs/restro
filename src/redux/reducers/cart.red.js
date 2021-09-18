import CartActionsTypes from "./../constants/CartActionsTypes";

const initialState = {
  isLoading: false,
  error: null,
  cartItem: [],
};

const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case CartActionsTypes.GET_CARTITEM:
      return { ...state, isLoading: true };
    case CartActionsTypes.GET_CARTITEM_SUCCESS:
      return { ...state, isLoading: false, cartItem: action.payload };
    case CartActionsTypes.GET_CARTITEM_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
