import React from "react";
import { Cuadrado, MainElement } from "./styled";
import { imagesMain } from "../../Data/hero";
import './index.css'

export default function Main() {
  return (
    <MainElement className="main-hero">
      <div
        className="content-images-hero"
        style={{
          display: "grid",
          gap: "10px",
          placeContent: "center",
        }}
      >
        {imagesMain.map(({ img, title, className }, inx) => (
          <Cuadrado
            key={inx}
            className={`${className}`}
            style={{
              background: `url(${img})`,
            }}
          >
            <div className="z-[1]">
              {title != "" ? (
                <h1 className="text-4xl max-w-[500px] font-bold text-white">
                  {title}
                </h1>
              ) : null}
            </div>
          </Cuadrado>
        ))}
      </div>
    </MainElement>
  );
}
