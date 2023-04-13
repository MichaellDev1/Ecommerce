import { ALL_PRODUCT, URL_KEY } from "./config";

const getProduct = () => {
  return fetch(`${URL_KEY}${ALL_PRODUCT}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export { getProduct };
