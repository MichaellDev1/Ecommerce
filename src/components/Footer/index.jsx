import React from "react";

const dataContact = [
  {
    label: "dirección",
    dato: "256 Day Developer",
  },
  {
    label: "telefono",
    dato: "+54 9 0101001010",
  },
  {
    label: "email",
    dato: "256@developerday.com",
  },
];

const dataMoreInformation = [
  {
    dato: "Preguntas frecuentes",
  },
  {
    dato: "Politicas de privacidad",
  },
];

export default function Footer() {
  return (
    <div className="min-h-[50px] py-10 text-white px-[50px] w-full bg-[#181818]">
      <div className="flex items-start sm:flex-row flex-col">
        <ul className="flex flex-col mr-10">
          <h4 className="text-lg uppercase font-semibold">CONTACTO</h4>
          {dataContact.map(({ label, dato }) => (
            <li key={label} className="flex flex-col my-2">
              <h6 className="uppercase font-semibold text-xs">{label}</h6>
              <span className="text-sm font-semibold text-[#aaaaaa]">
                {dato}
              </span>
            </li>
          ))}
        </ul>
        <ul>
          <h4 className="text-lg uppercase font-semibold sm:mt-0 mt-10">
            Informacion
          </h4>
          {dataMoreInformation.map((dato) => (
            <li key={dato.dato}>
              <a
                href={`/information/${dato}`}
                className="text-sm font-medium text-[#aaaaaa]"
              >
                {dato.dato}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
