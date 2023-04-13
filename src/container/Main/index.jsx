import React from "react";
import styled from "styled-components";

const Cuadrado = styled.div`
  border-radius: 10px;
  background-size: cover;
  overflow: hidden;
  padding: 30px 20px;
  background-position: center;
  position: relative;
  :before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.384);
  }
  display: flex;
  align-items: flex-end;
`;
const MainElement = styled.main`
  padding: 0 60px;
  margin-top: 10px;
`;

export default function Main() {
  return (
    <MainElement>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 370px)",
          gap: "10px",
          gridTemplateRows: "repeat(3, 175px)",
          placeContent: "center",
        }}
      >
        <Cuadrado
          style={{
            gridColumn: "1/3",
            gridRow: "1/3",
            background:
              "url(https://img.freepik.com/foto-gratis/concepto-cosmetica-natural-espacio-copia_23-2148565369.jpg?w=900&t=st=1681157430~exp=1681158030~hmac=3718f7bbb7f7d348d93482056759158db2f4477591f932393cf11c39c5a00833)",
          }}
        >
          <div className="z-[1]">
            <h1 className="text-5xl max-w-[500px] font-bold text-white">
              Encontra todos los productos aca!!!
            </h1>
          </div>
        </Cuadrado>
        <Cuadrado
          style={{
            background:
              "url(https://img.freepik.com/foto-gratis/batidora-batidora-electrica_140725-7263.jpg?w=740&t=st=1681157542~exp=1681158142~hmac=d4e165e68e808d3e90e19a7a9b5b9bccd6f71f66922ce2d14521032e8a560f9f)",
          }}
        ></Cuadrado>
        <Cuadrado
          style={{
            background:
              "url(https://img.freepik.com/foto-gratis/arreglo-kit-carrera-modelo-azul_23-2150084002.jpg?w=740&t=st=1681157591~exp=1681158191~hmac=6edd8dfbcec1626ee18b0ca13ff4be39a6727f30e6d5772616f8ffa74b2377c5)",
          }}
        ></Cuadrado>
        <Cuadrado
          style={{
            background:
              "url(https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309652.jpg?w=740&t=st=1681157617~exp=1681158217~hmac=839ec364232c1210063d87be60b084b84dbe4aa50f739db04c5c80a8e55129fb)",
          }}
        ></Cuadrado>
        <Cuadrado
          style={{
            background:
              "url(https://img.freepik.com/foto-gratis/arreglo-coleccion-estacionaria-moderna_23-2149309647.jpg?w=740&t=st=1681157637~exp=1681158237~hmac=e11152b39618f34f32efdabe0bf0352dbca58b670d0e2bcc623ffa4067979e64)",
          }}
        ></Cuadrado>
        <Cuadrado
          style={{
            background:
              "url(https://img.freepik.com/foto-gratis/foto-cocina-nadie-comedor-moderno-cafetera-interior-acogedor-tecnologia-mobiliario-decoracion-arquitectura-comoda-habitacion_482257-14562.jpg?w=900&t=st=1681157670~exp=1681158270~hmac=cdb05d3504fa16b3f6dde4fdc1eb7c6a9f9acc8b85c65d44df93b26646e62d40)",
            backgroundPosition: " left",
          }}
        ></Cuadrado>
      </div>
    </MainElement>
  );
}
