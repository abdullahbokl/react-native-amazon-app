import ActionsTitles from "../actions/ActionsTitles.js";

const initialState = {
  products: [],
  isLoading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTitles.ProductsActions.GET_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsTitles.ProductsActions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case ActionsTitles.ProductsActions.GET_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
