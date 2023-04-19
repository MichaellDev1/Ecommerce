import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useHeader() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return { handleChange, handleSubmit };
}
