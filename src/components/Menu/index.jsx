import React from "react";
import { navLink } from "../../Data/nav";
import { IoMdArrowDropdown } from "react-icons/io";
import useNav from "../../hooks/useNav";
import FromSearch from "../FormSearch";

export default function Menu({ isOpenMenu, setOpenMenu }) {
  const { categories, handleShowMenu, showMenu } = useNav();
  return (
    <div>
      <div
        className={`w-full ${
          isOpenMenu ? "fixed" : "hidden"
        } fixed top-0 left-0 bg-transparent z-50 h-[100vh]`}
        onClick={(e) => setOpenMenu(!isOpenMenu)}
      ></div>
      <div
        className={`w-[250px] ${
          isOpenMenu ? "left-0" : "right-full"
        } h-[100vh] bg-[#222529] fixed top-0 lg:hidden text-white p-5 z-50 overflow-y-scroll`}
      >
        <FromSearch style={'w-[100%] placeholder:text-[12px]'}/>
        <ul>
          {navLink.map(({ label, href, menu }) => (
            <li key={label} className="my-4 font-medium text-xl">
              <a
                href={href}
                className="flex items-center"
                onClick={menu ? handleShowMenu : null}
              >
                {label}
                {menu ? (
                  <span className={`${showMenu ? "-rotate-90" : "rotate-0"}`}>
                    <IoMdArrowDropdown />
                  </span>
                ) : null}
              </a>
              {menu ? (
                <div
                  className={`py-2 relative ${showMenu ? "flex" : "hidden"}`}
                >
                  <ul className="flex flex-col w-full">
                    {categories
                      ? categories.map((category) => (
                          <li key={category}>
                            <a
                              className="text-[16px] capitalize py-1 block"
                              href={`/category/${category}`}
                            >
                              {category}
                            </a>
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
