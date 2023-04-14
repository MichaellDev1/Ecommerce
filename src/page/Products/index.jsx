import React, { Suspense, useEffect, useState } from "react";
import { getProducts } from "../../services/getProducts";
const CardProduct = React.lazy(() => import("../../components/CardProduct"));

export default function AllProducts() {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
    });

    
  }, []);

  return (
    <main className="min-h-[100vh] py-[20px] px-[50px] text-black">
      <h3
        className="text-[#333]
  text-[27px] capitalize mb-5"
      >
        Todos los productos
      </h3>
      {products ? (
        <ul className="flex flex-wrap justify-center">
          {products.map((res) => (
            <Suspense fallback={<h4>Cargando...</h4>} key={res.id}>
              <CardProduct
                data={res}
                styles={{ width: "250px", margin: "10px" }}
              />
            </Suspense>
          ))}
        </ul>
      ) : (
        <h4>No se han encontrado resultados</h4>
      )}
    </main>
  );
}
