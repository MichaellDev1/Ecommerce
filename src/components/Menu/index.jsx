import React from "react";

export default function Menu({ isOpenMenu }) {
  return (
    <div
      className={`w-[250px] ${isOpenMenu ? 'left-0' : 'right-full'} h-[100vh] bg-[#222529] fixed top-0 lg:hidden text-white p-5 z-50`}
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus sint iure hic, cumque, molestiae adipisci consectetur et quos id dignissimos. Commodi ratione impedit libero hic, molestias doloribus illum porro!</div>
  );
}
