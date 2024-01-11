import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import ProductsReducer from "../reducers/ProductsReducer.js";

const rootReducer = combineReducers({
  ProductsReducer: ProductsReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

Store.subscribe(() => {
  console.log(Store.getState());
});

export default Store;
