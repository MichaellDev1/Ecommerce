import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../../services/getCategory";
import CardProduct from "../../components/CardProduct";

export default function Category() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getCategory({ category: id }).then((res) => {
      setProduct(res);
    });
  }, [id]);
  return (
    <div className="py-10 px-[50px] min-h-[100vh]">
      <h3  className="text-[#333]
  text-[27px] capitalize mb-5">{id}</h3>
      <ul
        className=""
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 300px)",
          placeContent: "center",
          gap: "15px",
          minHeight: "600px",
        }}
      >
        {product.length > 0
          ? product.map((res) => <CardProduct key={res.id} data={res} />)
          : null}
      </ul>
    </div>
  );
}
