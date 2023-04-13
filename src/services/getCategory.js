import { ALL_PRODUCT, CATEGORY, URL_KEY } from "./config";

function dataProducts(data) {
  const products = data.products.map((singleProduct) => {
    const {
      id,
      category,
      description,
      discountPercentage,
      price,
      stock,
      title,
      images,
    } = singleProduct;
    return {
      id,
      category,
      description,
      discountPercentage,
      price,
      stock,
      title,
      images,
    };
  });
  return products;
}

const getCategory = ({ category = null }) => {
  return fetch(`${URL_KEY}${ALL_PRODUCT}${CATEGORY}${category}`)
    .then((res) => res.json())
    .then(dataProducts);
};

export { getCategory };
