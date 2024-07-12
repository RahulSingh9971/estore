import React from "react";
import { Route, Routes ,  Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ChackOut from "../pages/ChackOut";
import Cart from "../pages/Cart";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='Home'/>}/>
        <Route path="Home" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Shop/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="chackout" element={<ChackOut />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default MainRoutes;
