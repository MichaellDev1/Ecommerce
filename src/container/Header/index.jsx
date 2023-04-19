import React, { useContext } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import logo from "../../../public/logo.png";
import Context from "../../context/ProductContext";

import { Buttons, HeaderElement, LogoHeader } from "./styles";
import FromSearch from "../../components/FormSearch";

export default function Header({ handleOpenCart, handleOpenMenu }) {
  const { cartProduct } = useContext(Context);
  return (
    <HeaderElement>
      <div>
        <LogoHeader href="/">
          <div className="w-[53px] h-[53px]">
            <img src={logo} alt="" />
          </div>
        </LogoHeader>
      </div>
      <div className="lg:block hidden">
        <FromSearch style={"min-w-[400px] placeholder:text-[14px]"} />
      </div>
      <div className="flex">
        <Buttons onClick={(e) => handleOpenMenu(e)} className="lg:hidden">
          <span className="text-[#43484e]">
            <FiMenu />
          </span>
        </Buttons>
        <Buttons href="/user">
          <span className="text-[#43484e]">
            <AiOutlineUser />
          </span>
        </Buttons>
        <Buttons href="/favorite">
          <span className="text-[#43484e]">
            <MdOutlineFavoriteBorder />
          </span>
        </Buttons>
        <Buttons href="#" onClick={(e) => handleOpenCart(e)}>
          {cartProduct.length > 0 ? (
            <div className="absolute text-[10px] right-0 top-[-5px] w-4 h-4 flex justify-center items-center text-white bg-red-500 rounded-full">
              <span>
                {cartProduct.reduce((lastValue, nextValue) => {
                  return lastValue + nextValue.cantidad;
                }, 0)}
              </span>
            </div>
          ) : null}
          <span className="text-[#43484e]">
            <HiOutlineShoppingBag />
          </span>
        </Buttons>
      </div>
    </HeaderElement>
  );
}
