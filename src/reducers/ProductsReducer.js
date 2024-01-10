import ProductsActions from "../enums/ProductsActions.js";

const initialState = [];

export default function ProductsReducer(state = initialState, action) {
  switch (action.type) {
    case ProductsActions.GET_PRODUCTS: {
      console.log("action", action.payload);
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
}
