import React, { useContext, useState } from "react";
import styled from "styled-components";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { FcShop } from "react-icons/fc";
import Context from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

const HeaderElement = styled.header`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  display: flex;
  position: fixed;
  z-index: 22;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  background: #fff;
`;

const InputStyled = styled.input`
  background: #fff;
  padding: 6px 15px;
  border: none;
  color: #000;
  outline: none;
  border: 1px solid #bdbdbd;
  border-radius: 18px;
  ::placeholder {
    color: ;
    font-weight: 400;
    font-size: 14px;
    color: rgb(161 161 170);
  }
`;

const Buttons = styled.a`
  background: none;
  border: none;
  color: #000;
  margin: 0 7px;
  position: relative;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-rigth: 0;
  }
  font-size: 25px;
  cursor: pointer;
`;

const LogoHeader = styled.a`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

const BtnSearch = styled.button`
  background: none;
  position: absolute;
  right: 2.1px;
  top: 4px;
  padding: 7px;
  display: grid;
  border-radius: 50%;
  background: #2563eb;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 15px;
`;

export default function Header({ handleOpenCart, handleOpenMenu }) {
  const navigate = useNavigate();
  const { cartProduct } = useContext(Context);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <HeaderElement>
      <div>
        <LogoHeader href="/">
          <span className="text-5xl">
            {" "}
            <FcShop />
          </span>
        </LogoHeader>
      </div>
      <form
        action=""
        className="lg:block hidden"
        style={{ fontSize: "15px", position: "relative" }}
        onSubmit={handleSubmit}
      >
        <InputStyled
          type="text"
          name="search"
          className="w-[400px]"
          id="search"
          placeholder="Find your product with best price"
          onChange={handleChange}
        />
        <BtnSearch>
          <BiSearch />
        </BtnSearch>
      </form>
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
