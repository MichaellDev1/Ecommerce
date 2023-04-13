import React from "react";
import { BsShop } from "react-icons/bs";

const information = [
  {
    title: "Free purchase",
    icon: <BsShop />,
    description: "With your purchase of $300 you have free shipping.",
  },
  {
    title: "Safe purchase",
    icon: <BsShop />,
    description:
      "Your purchase is safe and with return for 30 days.",
  },
  {
    title: "International delivery",
    icon: <BsShop />,
    description: "Shipping to all parts of the world.",
  },
];
export default function SectionInformation() {
  return (
    <div className="min-h-[400px] py-10 flex justify-center flex-col">
      <ul className="flex justify-center flex-wrap">
        {information.map(({ title, description, icon }) => (
          <li key={title} className="mx-10 my-4">
            <div className="flex flex-col justify-center items-center text-black relative w-[240px]">
            <div className="w-[110px] text-white h-[110px] bg-[#222529] rounded-full flex justify-center items-center">
              <span className="text-3xl">{icon}</span>
            </div>
            <div className="text-center mt-2">
              <h4 className="text-xl font-bold uppercase text-[#222529]">{title}</h4>
              <p className="text-[#808080] text-sm font-normal">{description}</p>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
