import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./container/Header";
import Nav from "./container/Nav";
import { ProductContext } from "./context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/index";
import Delails from "./page/Details";
import Category from "./page/Category";
import Search from "./page/Search";
import Footer from "./components/Footer";
import Login from "./page/Login";
import AllProducts from "./page/Products";
import PrivateRouter from "./components/PrivateRouter";
import Menu from "./components/Menu";

function App() {
  const [isOpenCart, setOpenCart] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handleOpenCart = (e) => {
    e.preventDefault();
    setOpenCart(!isOpenCart);
    if (isOpenMenu) setOpenMenu(false);
  };

  const handleOpenMenu = (e) => {
    e.preventDefault();
    if (isOpenCart) setOpenCart(false);
    setOpenMenu(!isOpenMenu);
  };

  return (
    <>
      <ProductContext>
        <BrowserRouter>
          <Cart isOpenCart={isOpenCart} handleOpenCart={handleOpenCart} />
          <Menu isOpenMenu={isOpenMenu} setOpenMenu={setOpenMenu}/>
          <Header
            handleOpenCart={handleOpenCart}
            handleOpenMenu={handleOpenMenu}
          />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/product/:id" element={<Delails />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/search/:keyword" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRouter />}>
              <Route path="/user" element={<Search />} />
              <Route path="/favorite" element={<Search />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductContext>
    </>
  );
}

export default App;
