import styled from "styled-components";

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

export { BtnSearch, Buttons, HeaderElement, InputStyled, LogoHeader };
