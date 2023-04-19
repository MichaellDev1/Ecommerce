import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { ListNav, NavElement, UlELement } from "./styled";
import { navLink } from "../../Data/nav";
import useNav from "../../hooks/useNav";
import "./index.css";

export default function Nav() {
  const { categories, handleShowMenu, showMenu } = useNav();
  return (
    <NavElement className="lg:flex hidden">
      <UlELement>
        {navLink.map(({ label, href, menu }) => (
          <ListNav key={label}>
            <a href={href} onClick={menu ? handleShowMenu : null}>
              {label}
              {menu ? (
                <span>
                  <IoMdArrowDropdown />
                </span>
              ) : null}
            </a>
            {menu ? (
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
            ) : null}
          </ListNav>
        ))}
      </UlELement>
    </NavElement>
  );
}
