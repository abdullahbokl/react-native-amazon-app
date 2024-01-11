import ActionsTitles from "../actions/ActionsTitles";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTitles.CartActions.LOAD_CART:
      return {
        ...state,
        loading: true,
      };
    case ActionsTitles.CartActions.LOAD_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ActionsTitles.CartActions.LOAD_CART_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default CartReducer;
