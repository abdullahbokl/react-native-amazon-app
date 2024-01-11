import ApiServices from "../../services/ApiServices";
import ActionsTitles from "./ActionsTitles";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await ApiServices.getProducts({ limit: 5 });
      console.log(response.data);
      dispatch({
        type: ActionsTitles.ProductsActions.GET_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ActionsTitles.ProductsActions.GET_PRODUCTS_ERROR,
        payload: error,
      });
    }
  };
};

const Actions = {
  getProducts,
};

export default Actions;