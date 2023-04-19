import React from 'react'
import useHeader from '../../hooks/useHeader';
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";

const InputStyled = styled.input`
  background: #fff;
  padding: 6px 15px;
  border: none;
  :focus {
    background: #fff;
  }
  color: #000;
  outline: none;
  border: 1px solid #bdbdbd;
  border-radius: 18px;
  ::placeholder {
    color: ;
    font-weight: 400;
    color: rgb(161 161 170);
  }
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

export default function FromSearch({style}) {
  const { handleChange, handleSubmit } = useHeader();
  return (
    <form
        action=""
        style={{ fontSize: "15px", position: "relative" }}
        onSubmit={handleSubmit}
      >
        <InputStyled
          type="text"
          name="search"
          className={style}
          id="search"
          placeholder="Iphone, laptops, furniture..."
          onChange={handleChange}
        />
        <BtnSearch>
          <BiSearch />
        </BtnSearch>
      </form>
  )
}
