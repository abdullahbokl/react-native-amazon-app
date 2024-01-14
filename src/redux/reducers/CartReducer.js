import ActionsTitles from "../actions/ActionsTitles";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTitles.CartActions.LOAD_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsTitles.CartActions.LOAD_CART_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionsTitles.CartActions.LOAD_CART_ERROR:
      console.error("Error loading cart", action.payload);
      return {
        ...state,
        isLoading: false,
      };

    // Add to cart
    case ActionsTitles.CartActions.ADD_TO_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsTitles.CartActions.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionsTitles.CartActions.ADD_TO_CART_ERROR:
      console.error("Error adding to cart", action.payload);
      return {
        ...state,
        isLoading: false,
      };

    // Remove from cart
    case ActionsTitles.CartActions.REMOVE_FROM_CART:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsTitles.CartActions.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionsTitles.CartActions.REMOVE_FROM_CART_ERROR:
      console.error("Error removing from cart", action.payload);
      return {
        ...state,
        isLoading: false,
      };

    //
    default:
      return state;
  }
};

export default CartReducer;
