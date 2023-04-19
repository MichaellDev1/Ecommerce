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

export { Buttons, HeaderElement, LogoHeader };
