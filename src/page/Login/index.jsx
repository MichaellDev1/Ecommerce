import React, { useState } from "react";
import { ImGoogle } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import "./index.css";

export default function Login() {
  const [isLog, setLog] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    fetch("localhost:5173");
    setLog(true);
  };
  return (
    <main className="text-black min-h-[70vh] py-10 px-[50px] flex items-center lg:justify-start justify-center">
      <form
        action=""
        className="text-[#222529]  flex flex-col md:w-[450px] w-[100%] max-w-[1000px]"
      >
        <div className="mb-4">
          <h3 className="text-xl font-bold">Iniciar sesión</h3>
        </div>
        <div className="flex flex-col mb-7 w-[100%]">
          <label htmlFor="email" className="text-[#8f8f8f] text-base mb-2">
            Correo electrónico <span className="text-[#2563EB]">*</span>
          </label>
          <input type="text" name="" id="" className="input-login" />
        </div>
        <div className="flex flex-col mb-7 w-[100%]">
          <label htmlFor="password" className="text-[#8f8f8f] text-base mb-2">
            Contraseña <span className="text-[#2563EB]">*</span>
          </label>
          <input type="password" name="" id="" className="input-login" />
        </div>
        <div>
          {isLog ? (
            <p className="text-red-700 text-base font-semibold">
              The request fails
            </p>
          ) : null}
        </div>
        <div>
          <a href="#" className="text-base font-semibold text-[#222529]">
            ¿Olvidaste tu contraseña?
          </a>
          <div>
            <button
              className="bg-[#222529] hover:bg-[#33363b] transition-[background-color] w-full ml-2 uppercase text-white text-base py-3 mt-3 px-4 font-bold"
              onClick={handleClick}
            >
              Iniciar sesión
            </button>
            <button className="bg-[#f0f0f0] ml-2 w-full uppercase text-[#222529] text-base py-3 mt-3 px-4 font-bold">
              ¿No tienes cuenta? Registrate
            </button>
            <div className="flex justify-center items-center">
              <button className="bg-[#f0f0f0] ml-2 uppercase text-[#222529] text-base py-4 mt-3 px-5 font-bold">
                <ImGoogle />
              </button>
              <button className="bg-[#f0f0f0] ml-2 uppercase text-[#222529] text-base py-4 mt-3 px-5 font-bold">
                <FaFacebookF />
              </button>
              <button className="bg-[#f0f0f0] ml-2 uppercase text-[#222529] text-base py-4 mt-3 px-5 font-bold">
                <BsMicrosoft />
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
