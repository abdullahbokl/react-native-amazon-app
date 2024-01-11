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
      console.log("ids", ids);
      if (ids.includes(product.id)) {
        dispatch({
          type: ActionsTitles.CartActions.ADD_TO_CART_ERROR,
          payload: "Product already in cart",
        });
        return;
      }

      await CacheServices.set("cart", product.id);
      allProducts.push(product);
      console.log("allProducts", allProducts);
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

      const products = await fetchProducts(ids);

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
  const ids = await CacheServices.get("cart");
  if (ids) {
    return ids;
  }
  return [];
};

const fetchProducts = async (ids) => {
  try {
    const products = await Promise.all(
      ids.map(async (id) => {
        const response = await ApiServices.getProductById(id);
        return response.data;
      })
    );
    return products;
  } catch (error) {
    console.log("error fetching products", error);
  }
};

const CartActions = {
  loadCart,
  addToCart,
  removeFromCart,
};

export default CartActions;
