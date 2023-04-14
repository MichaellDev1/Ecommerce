import React from "react";

export default function Menu({ isOpenMenu }) {
  return (
    <div
      className={`w-[300px] ${isOpenMenu ? 'left-0' : '-left-full'} h-[100vh] bg-[#222529] fixed top-0 left-0 lg:hidden z-50`}
    ></div>
  );
}
