import { useState, useEffect } from "react";
import { getCategories } from "../services/getCategories";

export default function useNav() {
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return { categories, handleShowMenu, showMenu };
}
