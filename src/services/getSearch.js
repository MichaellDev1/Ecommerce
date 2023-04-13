import { URL_KEY, SEARCH_PRODUCT } from "./config";

export default function getSearch({ keyword }) {
  return fetch(`${URL_KEY}${SEARCH_PRODUCT}${keyword}`)
    .then((res) => res.json())
}
