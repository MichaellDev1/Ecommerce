import React, { useContext, useState } from "react";
import Context from "../../context/ProductContext";
import TargetAlertdelete from "../TargetAlerDelete";
import { IoIosArrowBack } from "react-icons/io";
import CardCartProduct from "../CardCartProduct";
import styled from "styled-components";

const CartElement = styled.div`
  transition: right 0.5s;
  overflow-y: scroll;
`;

export default function Cart({ isOpenCart, handleOpenCart }) {
  const { cartProduct, setCart } = useContext(Context);
  const [isDelete, setDalete] = useState(false);
  const [isClick, setClick] = useState(false);

  const handleDeleteProduct = (id) => {
    const deleteProduct = cartProduct.filter((product) => product.id !== id);
    setCart(deleteProduct);
    setDalete(true);
    const pauseAlert = setInterval(() => {
      setDalete(false);
      clearInterval(pauseAlert);
    }, 2000);

    console.log(cartProduct);
  };

  const handleBuyCart = () => {
    setClick(true)

    const interval = setInterval(()=>{
      setClick(false)
      clearInterval(interval)
    },2000)
  };
  return (
    <React.Fragment>
      <div
        className={`w-full ${
          isOpenCart ? "block" : "hidden"
        } z-[23] h-[100vh] bg-[#00000086] fixed top-0 left-0`}
        onClick={(e) => handleOpenCart(e)}
      ></div>
      <CartElement
        className={`fixed ${
          isOpenCart ? "right-0" : "-right-full"
        } top-0 w-[340px] bg-white h-[100vh] text-black py-5 px-8 z-40`}
      >
        <div>
          <button
            className="flex text-base items-center"
            onClick={(e) => handleOpenCart(e)}
          >
            <span className="text-base">
              <IoIosArrowBack />
            </span>
            <span className="ml-1 text-base font-normal">
              Items (
              {cartProduct.reduce((lastValue, nextValue) => {
                return lastValue + nextValue.cantidad;
              }, 0)}
              )
            </span>
          </button>
        </div>
        <div className="text-[#222529] text-2xl py-5 font-semibold">
          <h3>Tu carrito</h3>
        </div>
        <ul>
          {cartProduct.length === 0 ? (
            <h3 className="text-stone-500 mb-5 text-[15px]">
              No hay productos en el carrito.
            </h3>
          ) : (
            <div>
              {cartProduct.map((product) => (
                <CardCartProduct
                  dataProduct={product}
                  key={product.id}
                  handleDeleteProduct={handleDeleteProduct}
                />
              ))}
              <div className="flex justify-between py-3 uppercase font-bold text-lg text-[#222529]">
                <h4>Total:</h4>
                <span>
                  $
                  {cartProduct.reduce((lastValue, nextValue) => {
                    return lastValue + nextValue.totalPrice;
                  }, 0)}
                </span>
              </div>
            </div>
          )}
        </ul>
        {isClick ? (
            <p className="text-red-700 text-base font-semibold">
              The request fails
            </p>
          ) : null}
        {cartProduct.length > 0 ? (
          <button
            className="bg-[#222529] w-full uppercase text-white text-base py-3 px-4 font-bold"
            onClick={handleBuyCart}
          >
            FINALIZAR COMPRA
          </button>
        ) : null}
      </CartElement>
      {isDelete ? (
        <TargetAlertdelete
          styles={{ position: "fixed", top: "10px", left: "0" }}
        />
      ) : null}
    </React.Fragment>
  );
}
