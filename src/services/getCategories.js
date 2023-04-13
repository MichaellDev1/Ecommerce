import { CATEGORIES, URL_KEY } from "./config";

const getCategories = () => {
  return fetch(`${URL_KEY}${CATEGORIES}`)
    .then((res) => res.json())
};

export { getCategories };
