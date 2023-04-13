import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./container/Header";
import Main from "./container/Main";
import Nav from "./container/Nav";
import { ProductContext } from "./context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/index";
import Delails from "./page/Details";
import Products from "./page/Products";
import Category from "./page/Category";
import Search from "./page/Search";
import Footer from "./components/Footer";

function App() {
  const [isOpenCart, setOpenCart] = useState(false);
  const handleOpenCart = (e) => {
    e.preventDefault();
    setOpenCart(!isOpenCart);
  };
  return (
    <>
      <ProductContext>
        <BrowserRouter>
          <Cart isOpenCart={isOpenCart} handleOpenCart={handleOpenCart} />
          <Header handleOpenCart={handleOpenCart} />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/product/:id" element={<Delails />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/search/:keyword" element={<Search />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductContext>
    </>
  );
}

export default App;
