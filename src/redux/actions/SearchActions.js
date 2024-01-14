import ApiServices from "../../services/ApiServices";
import ActionsTitles from "./ActionsTitles";

const searchProducts = (search) => {
  return async (dispatch) => {
    dispatch({
      type: ActionsTitles.ProductsActions.SEARCH_PRODUCTS,
    });
    try {
      const response = await ApiServices.searchProducts(search);
      dispatch({
        type: ActionsTitles.ProductsActions.SEARCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ActionsTitles.ProductsActions.SEARCH_PRODUCTS_ERROR,
        payload: error,
      });
    }
  };
};

const Actions = {
  searchProducts,
};

export default Actions;
