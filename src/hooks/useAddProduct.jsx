import Context from "../context/ProductContext";
import { useContext } from "react";

export default function useAddProduct({ data, setAgregate }) {
  const { images, title, price, id } =
    data;
  const { cartProduct, setCart } = useContext(Context);
  let cantidad = 1;

  const handleAddCart = () => {
    const productRepeatIndex = cartProduct.findIndex(
      (product) => product.title === title
    );

    if (productRepeatIndex !== -1) {
      cartProduct[productRepeatIndex].cantidad++;
      cartProduct[productRepeatIndex].totalPrice =
        cartProduct[productRepeatIndex].price *
        cartProduct[productRepeatIndex].cantidad;
      setCart([...cartProduct]);
    } else {
      const addProduct = {
        title,
        price,
        id,
        cantidad,
        images,
        totalPrice: price * cantidad,
      };
      setCart([...cartProduct, addProduct]);
    }

    setAgregate(true);

    const pauseAlert = setInterval(() => {
      setAgregate(false);
      clearInterval(pauseAlert);
    }, 2000);
  };
  return { handleAddCart };
}
