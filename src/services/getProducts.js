import { ALL_PRODUCT, URL_KEY } from "./config";

const getProducts = () => {
  return fetch(`${URL_KEY}${ALL_PRODUCT}`).then((res) => res.json());
};

export { getProducts };
