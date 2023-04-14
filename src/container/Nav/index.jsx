import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/getCategories";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import "./index.css";

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

const navLink = [
  {
    label: "",
    href: "",
    menu: false,
  },
];

export default function Nav() {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <NavElement className="lg:flex hidden">
      <UlELement>
        <ListNav>
          <a href="/">Inició</a>
        </ListNav>
        <ListNav>
          <a href="#" onClick={handleShowMenu}>
            Categorias
            <span>
              <IoMdArrowDropdown />
            </span>
          </a>
          <div
            className={`w-[500px] menuCategory h-[350px] shadow-xl bg-white  px-10 py-5 overflow-y-scroll rounded-md absolute z-10 top-10 ${
              showMenu ? "flex" : "hidden"
            }`}
          >
            <span className="w-5 h-5 shadow-xl menuCategory bg-white rounded-sm absolute -top-2 left-5 rotate-45"></span>

            <ul className="flex flex-col w-full">
              {categories
                ? categories.map((category) => (
                    <a
                      key={category}
                      className="text-xl capitalize py-2 block"
                      href={`/category/${category}`}
                    >
                      {category}
                    </a>
                  ))
                : null}
            </ul>
          </div>
        </ListNav>
        <ListNav>
          <a href="/category/mens-shirts">Hombre</a>
        </ListNav>
        <ListNav>
          <a href="/category/womens-dresses">Mujer</a>
        </ListNav>
        <ListNav>
          <a href="/category/smartphones">Celulares</a>
        </ListNav>
        <ListNav>
          <a href="/allproducts">Todos los productos</a>
        </ListNav>
        <ListNav>
          <a href="#">Contacto</a>
        </ListNav>
      </UlELement>
    </NavElement>
  );
}
