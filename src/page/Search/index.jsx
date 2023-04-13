import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getSearch from "../../services/getSearch";
import CardProduct from "../../components/CardProduct";

export default function Search() {
  const { keyword } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const decodeKeyword = decodeURI(keyword).toLowerCase();
    getSearch({ keyword: decodeKeyword }).then((res) => {
      setProduct(res);
    });
  }, [keyword]);

  return (
    <section className="text-black  min-h-[100vh] py-10 px-[50px]">
      <div>
        <h2
          className="text-[#333]
  text-[27px]"
        >
          Result for: {decodeURI(keyword)}
        </h2>
      </div>
      {product ? (
        product.products.length == 0 ? (
          <h4 className="text-[#181818] font-semibold text-base">No se encontro resultado</h4>
        ) : (
          <ul
            className="mt-5"
            style={{
              display: "flex",
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}
          >
            {product.products.map((res) => (
              <CardProduct styles={{margin: '10px', width: '300px'}} key={res.id} data={res} />
            ))}
          </ul>
        )
      ) : null}
    </section>
  );
}
