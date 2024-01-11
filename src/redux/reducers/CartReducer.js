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
      console.log("Error loading cart", action.payload);
      return {
        ...state,
        loading: false,
      };

    // Add to cart
    case ActionsTitles.CartActions.ADD_TO_CART:
      return {
        ...state,
        loading: true,
      };
    case ActionsTitles.CartActions.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ActionsTitles.CartActions.ADD_TO_CART_ERROR:
      console.log("Error adding to cart", action.payload);
      return {
        ...state,
        loading: false,
      };

    // Remove from cart
    case ActionsTitles.CartActions.REMOVE_FROM_CART:
      return {
        ...state,
        loading: true,
      };
    case ActionsTitles.CartActions.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ActionsTitles.CartActions.REMOVE_FROM_CART_ERROR:
      console.log("Error removing from cart", action.payload);
      return {
        ...state,
        loading: false,
      };

    //
    default:
      return state;
  }
};

export default CartReducer;
