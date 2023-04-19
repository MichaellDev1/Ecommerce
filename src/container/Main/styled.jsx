import styled from "styled-components";

const Cuadrado = styled.div`
  border-radius: 10px;
  background-size: cover;
  overflow: hidden;
  background: red;
  padding: 30px 20px;
  background-position: center;
  position: relative;
  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.384);
  }
  display: flex;
  align-items: flex-end;
`;
const MainElement = styled.main`
  
`;

export { Cuadrado, MainElement };
