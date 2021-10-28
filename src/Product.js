import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./actions/product";

const Product = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            {product.name}
            <button
              onClick={() =>
                dispatch({ type: "DELETE_PRODUCT", payload: product.id })
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
