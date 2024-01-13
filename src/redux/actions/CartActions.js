import ApiServices from "../../services/ApiServices";
import ActionsTitles from "./ActionsTitles";
import CacheServices from "../../services/CacheServices";
import Store from "../Stores/Store";

const removeFromCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.CartActions.REMOVE_FROM_CART,
    });
    try {
      const allProducts = Store.getState().CartReducer.products;
      const ids = allProducts.map((product) => product.id);
      const index = ids.indexOf(product.id);
      if (index > -1) {
        allProducts.splice(index, 1);
      }
      await CacheServices.set("cart", allProducts);
      dispatch({
        type: ActionsTitles.CartActions.REMOVE_FROM_CART_SUCCESS,
        payload: allProducts,
      });
    } catch (error) {
      dispatch({
        type: ActionsTitles.CartActions.REMOVE_FROM_CART_ERROR,
        payload: error,
      });
    }
  };
};

const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.CartActions.ADD_TO_CART,
    });
    try {
      const allProducts = Store.getState().CartReducer.products ?? [];
      const ids = allProducts.map((product) => product.id);
      if (ids.includes(product.id)) {
        dispatch({
          type: ActionsTitles.CartActions.ADD_TO_CART_ERROR,
          payload: "Product already in cart",
        });
        return;
      }

      await CacheServices.addToList("cart", product);
      allProducts.push(product);
      dispatch({
        type: ActionsTitles.CartActions.ADD_TO_CART_SUCCESS,
        payload: allProducts,
      });
    } catch (error) {
      dispatch({
        type: ActionsTitles.CartActions.ADD_TO_CART_ERROR,
        payload: error,
      });
    }
  };
};

const loadCart = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.CartActions.LOAD_CART,
    });
    try {
      const ids = await loadIdsFromCache();

      if (ids == null || ids.length == 0) {
        dispatch({
          type: ActionsTitles.CartActions.LOAD_CART_SUCCESS,
          payload: [],
        });
        return;
      }

      const products = [];
      for (let i = 0; i < ids.length; i++) {
        const response = await ApiServices.getProductById(ids[i]);
        products.push(response.data);
      }

      dispatch({
        type: ActionsTitles.CartActions.LOAD_CART_SUCCESS,
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: ActionsTitles.CartActions.LOAD_CART_ERROR,
        payload: error,
      });
    }
  };
};

const loadIdsFromCache = async () => {
  const products = await CacheServices.get("cart");
  if (products == null) return [];
  return products.map((product) => product.id);
};

const fetchProducts = async (ids) => {
  try {
    if (ids == null || ids.length == 0) return [];

    const products = [];
    for (let i = 0; i < ids.length; i++) {
      const response = await ApiServices.getProductById(ids[i]);
      products.push(response.data);
    }

    return products;
  } catch (error) {
    console.error("error fetching products", error);
  }
};

const CartActions = {
  loadCart,
  addToCart,
  removeFromCart,
};

export default CartActions;
