import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSingleProduct from "../../services/getSingleProduct";
import styled from "styled-components";
import Context from "../../context/ProductContext";

const ContentImage = styled.div`
  margin: 0 5px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export default function Delails() {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState();
  const [imageSelected, setImageSelected] = useState(null);
  const { cartProduct, setCart } = useContext(Context);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    getSingleProduct({ id }).then((product) => {
      setSingleProduct(product);
      setImageSelected(product.images[0]);
    });
  }, [id]);

  const handleImageSelected = (image) => {
    if (image == imageSelected) return;
    setImageSelected(image);
  };

  const handleAddCart = () => {
    const productRepeatIndex = cartProduct.findIndex(
      (product) => product.title === singleProduct.title
    );

    if (productRepeatIndex !== -1) {
      cartProduct[productRepeatIndex].cantidad =
        parseInt(cantidad) + parseInt(cartProduct[productRepeatIndex].cantidad);
      cartProduct[productRepeatIndex].totalPrice =
        cartProduct[productRepeatIndex].price *
        cartProduct[productRepeatIndex].cantidad;
      setCart([...cartProduct]);
    } else {
      const addProduct = {
        title: singleProduct.title,
        price: singleProduct.price,
        id: singleProduct.id,
        cantidad,
        images: singleProduct.images,
        totalPrice: singleProduct.price * cantidad,
      };
      setCart([...cartProduct, addProduct]);
    }

    const pauseAlert = setInterval(() => {
      clearInterval(pauseAlert);
    }, 2000);
  };

  const handleChange = (e) => {
    if (e.target.value <= 0) e.target.value = 0;
    else setCantidad(e.target.value);
  };

  return (
    <section className=" text-black py-6 min-h-[100vh] px-[50px]">
      <div>
        <div>
          {singleProduct ? (
            <div className="flex">
              <div>
                <div className="w-[430px] h-[350px]">
                  <img
                    src={imageSelected}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mt-2">
                  {singleProduct.images.map((image, inx) => (
                    <ContentImage
                      className={` ${
                        imageSelected == image ? "border-2 border-black" : null
                      } w-[100px] hover:border-2 border-black h-[100px] cursor-pointer`}
                      key={inx}
                      onClick={() => handleImageSelected(image)}
                    >
                      <img
                        src={image}
                        alt={image}
                        className="w-full h-full object-cover"
                      />
                    </ContentImage>
                  ))}
                </div>
              </div>
              <div className="ml-5 flex flex-col min-w-[400px] justify-between h-[350px]">
                <div className="flex flex-col justify-center h-full">
                  <h2 className="text-[#222529] text-3xl font-bold py-1">{singleProduct.title}</h2>
                  <span className="text-[#222529] text-2xl font-bold py-1">${singleProduct.price}</span>
                  <p className="max-w-[400px] text-[15px] text-stone-500 font-semibold py-2">{singleProduct.description}</p>
                  <span className="text-[#4e4e4e] text-sm font-bold  ">
                    CATEGORIA: <span className="capitalize">{singleProduct.category}</span>
                  </span>
                </div>
                <div className="flex">
                  <input
                    type="number"
                    name="number"
                    id="number"
                    onChange={handleChange}
                    className="flex-1"
                  />
                  <button className="bg-[#222529] flex-[2] ml-2 uppercase text-white text-base py-2 px-4 font-bold" onClick={handleAddCart}>
                    AGREGAR AL CARRITO
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
