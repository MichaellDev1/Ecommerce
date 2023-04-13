import React from "react";
import "../TargetAlertSucess/index.css";
import { BsCheck2Circle } from "react-icons/bs";

export default function TargetAlertdelete({ styles }) {
  return (
    <div
      style={styles}
      class="w-[300px] left-0 alert right-0 m-auto select-none text-red-800 border-l-4 flex items-center border-red-500 bg-red-100 py-2 z-30 px-6 font-medium hover:border-red-500"
    >
      <span>Se a elimiado el producto con exito!!!</span>
      <span className="ml-3">
        <span className="text-2xl">
          <BsCheck2Circle />
        </span>
      </span>
    </div>
  );
}
