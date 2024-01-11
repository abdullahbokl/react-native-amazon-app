import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import ProductsReducer from "../reducers/ProductsReducer.js";
import CartReducer from "../reducers/CartReducer.js";

const rootReducer = combineReducers({
  ProductsReducer: ProductsReducer,
  CartReducer: CartReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

Store.subscribe(() => {
  console.log(Store.getState());
});

export default Store;
