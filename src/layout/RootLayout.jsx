import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex gap-10">
      <Navigation />
      <div className="h-screen w-[75vw] p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
