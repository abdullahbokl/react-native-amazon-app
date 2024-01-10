import { createStore, combineReducers } from "redux";

import ProductsReducer from "../reducers/ProductsReducer.js";

const Store = createStore(
  combineReducers({
    ProductsReducer: ProductsReducer,
  })
);

export default Store;
