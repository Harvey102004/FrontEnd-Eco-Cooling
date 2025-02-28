import React from "react";
import Product from "../pages/Product";
import { Outlet } from "react-router-dom";

const ProductsLayout = () => {
  return (
    <div className="">
      <Product />
      <Outlet />
    </div>
  );
};

export default ProductsLayout;
