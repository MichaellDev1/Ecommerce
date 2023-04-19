import styled from "styled-components";

const NavElement = styled.nav`
  width: 100%;
  height: 50px;
  justify-content: center;
  padding: 0 50px;
  align-items: center;
  background: #fff;
  margin-top: 80px;
`;

const UlELement = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ListNav = styled.li`
  list-style: none;
  position: relative;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    color: rgb(110 110 110);
  }
`;

export { ListNav, NavElement, UlELement };
