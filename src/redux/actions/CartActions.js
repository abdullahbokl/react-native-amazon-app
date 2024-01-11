import ApiServices from "../../services/ApiServices";
import ActionsTitles from "./ActionsTitles";
import CacheServices from "../../services/CacheServices";
import Store from "../Stores/Store";

const loadCart = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.CartActions.LOAD_CART,
    });
    try {
      const ids = await loadIdsFromCache();

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

const addToCart = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.CartActions.ADD_TO_CART,
    });
    try {
      console.log("product", product);
      const allProducts = Store.getState().CartReducer.products;
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
};

export default CartActions;
