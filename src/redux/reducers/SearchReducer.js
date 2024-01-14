import ActionsTitles from "../actions/ActionsTitles.js";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTitles.ProductsActions.SEARCH_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionsTitles.ProductsActions.SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case ActionsTitles.ProductsActions.SEARCH_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default SearchReducer;
