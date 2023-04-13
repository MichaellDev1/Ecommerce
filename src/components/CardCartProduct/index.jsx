import React from "react";
import styled from "styled-components";
import { IoIosClose } from "react-icons/io";

const ListCartProduct = styled.li`
  border-bottom: 1px solid #ececec;
  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
  position: relative;
`;

export default function CardCartProduct({ dataProduct, handleDeleteProduct }) {
  const { id, title, cantidad, totalPrice, images, price } = dataProduct;
  return (
    <ListCartProduct key={id}>
      <div className="flex items-center py-3">
        <a
          href={`/detail/product/${id}`}
          className="w-[80px] h-[90p] relative"
        >
          <img src={images[0]} alt="" className="w-full h-full object-cover" />
        </a>
        <div className="flex flex-col justify-center pl-3">
          <a
            href={`/detail/product/${id}`}
            className="text-[15px] font-semibold text-[#222529]"
          >
            {title}
          </a>
          <span className="text-sm font-normal text-stone-500 mt-1">
            {cantidad}
            <span className="px-1">x</span>
            {price}
          </span>
        </div>
        <button
          className="absolute right-0 top-[0] text-[#222529]"
          onClick={() => handleDeleteProduct(id)}
        >
          <span className="text-2xl">
            <IoIosClose />
          </span>
        </button>
      </div>
    </ListCartProduct>
  );
}
