import { URL_KEY, ALL_PRODUCT } from "./config";

export default function getSingleProduct({ id }) {
  return fetch(`${URL_KEY}${ALL_PRODUCT}/${id}`)
    .then((res) => res.json())
}
