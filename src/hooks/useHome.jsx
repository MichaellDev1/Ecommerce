import React, { useEffect, useState } from "react";
import { getCategory } from "../services/getCategory";

export default function useHome() {
  const [selected, setSelected] = useState("smartphones");
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAgregate, setAgregate] = useState(false);
  const [topProduct, setTopPRoduct] = useState();

  const handleClick = (category) => {
    setSelected(category);
  };

  useEffect(() => {
    if (selected) {
      setLoading(true);
      getCategory({ category: selected }).then((listProduct) => {
        setProducts(listProduct);
        setLoading(false);
      });
    }
  }, [selected]);

  useEffect(() => {
    getCategory({ category: "laptops" }).then((res) => {
      setTopPRoduct(res);
    });
  }, []);

  return { selected, products, isLoading, isAgregate, topProduct, setAgregate, handleClick};
}
