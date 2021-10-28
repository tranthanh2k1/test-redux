import { getAll } from "../api/productAPI";

export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await getAll();
    dispatch({ type: "FETCH_DATA", payload: data });
  } catch (error) {
    console.log(error);
  }
};
