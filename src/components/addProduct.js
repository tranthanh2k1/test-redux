import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/product";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const newData = {
      id: Math.random().toString(5),
      ...data,
    };
    dispatch(addProduct(newData));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <button type="submit">Them san pham</button>
    </form>
  );
};

export default AddProduct;
