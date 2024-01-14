import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import ProductsReducer from "../reducers/ProductsReducer.js";
import CartReducer from "../reducers/CartReducer.js";
import SearchReducer from "../reducers/SearchReducer.js";

const rootReducer = combineReducers({
  ProductsReducer: ProductsReducer,
  CartReducer: CartReducer,
  SearchReducer: SearchReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

Store.subscribe(() => {
  console.log(Store.getState());
});

export default Store;
