import axiosClient from "./axiosClient";

export const getAll = () => {
  const url = "/product";
  return axiosClient.get(url);
};

export const add = (product) => {
  const url = "/product";
  return axiosClient.post(url, product);
};

export const remove = (id) => {
  const url = `/product/${id}`;
  return axiosClient.delete(url);
};
