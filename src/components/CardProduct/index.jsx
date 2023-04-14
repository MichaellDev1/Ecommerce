import React from "react";
import styled from "styled-components";
import useAddProduct from "../../hooks/useAddProduct";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  position: relative;
  background: #fff;
  text-decoration: none;
  box-shadow: 1px 1px 5px rgba(0 0 0 / 4%);
  color: #000;
  padding: 20px;
`;

const ContentImage = styled.a`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 200px;
`;

const DiscountPercentageElement = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  font-weight: 600;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  padding: 5px 10px;
  z-index: 2;
`;

function CardProduct({ data, setAgregate, isDiscount = false, styles = null}) {
  const { images, title, price, stock, discountPercentage, category, id } =
    data;

  const { handleAddCart } = useAddProduct({ data, setAgregate });

  return (
    <Card style={styles}>
     {isDiscount ?  <DiscountPercentageElement>
        {discountPercentage}%
      </DiscountPercentageElement> : null}
      <ContentImage href={`/detail/product/${id}`}>
        <img
          src={images[0]}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </ContentImage>
      <div className="mt-4 flex flex-col" style={{ lineHeight: "10px" }}>
        <div className="flex flex-col">
          <a
            href={`/category/${category}`}
            className="text-[11px] font-semibold text-zinc-400 uppercase"
          >
            {category}
          </a>
          <a
            href={`/detail/product/${id}`}
            className="text-base font-semibold text-[#222529]"
          >
            {title}
          </a>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="font-semibold text-lg">
            {isDiscount ? <del className="text-slate-500">
              ${Math.round((price * discountPercentage) / 100 + price)}
            </del> : null }
            <span className="ml-3 text-[#222529] font-bold">${price}</span>
          </div>
          <div>
            <button
              onClick={handleAddCart}
              className="bg-blue-600 text-white font-bold py-2 px-3 text-lg rounded-xl "
            >
              <HiOutlineShoppingBag />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default React.memo(CardProduct)