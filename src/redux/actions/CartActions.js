import ApiServices from "../../services/ApiServices";
import ActionsTitles from "./ActionsTitles";
import CacheServices from "../../services/CacheServices";

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
};

export default CartActions;
