import Cart from "@/main/Cart";
import Checkout from "@/main/Checkout";
import HomeView from "@/main/HomeView";
import Login from "@/main/Login";
import Signup from "@/main/Signup";
import ProductDetails from "@/main/ProductDetails";
import Shop from "@/main/Shop";
import { Routes, Route } from "react-router-dom";
import React from "react";
 import ProtectedRoute from "./ProtectedRoute";
const Router = () => {
  return (
    <Routes>
      <Route path="home" element={<HomeView />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route path="Checkout" element={<ProtectedRoute>
        <Checkout />
        </ProtectedRoute>} />
    </Routes>
  );
};

export default Router;
