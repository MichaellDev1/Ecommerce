import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import "./index.css";

export default function TargetAlerSucess({ styles }) {
  return (
    <div
      style={styles}
      class="w-[300px] left-0 alert right-0 m-auto select-none text-lime-800 border-l-4 border-lime-400 bg-lime-100 py-2 px-5 z-40 font-medium hover:border-lime-500 flex items-center"
    >
      <span>Se agrego el producto al carrito!!!</span>
      <span className='ml-3'>
        <span className="text-2xl">
          <BsCheck2Circle />
        </span>
      </span>
    </div>
  );
}
