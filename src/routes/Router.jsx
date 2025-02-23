import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CartPage from "../pages/CartPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default Router;
