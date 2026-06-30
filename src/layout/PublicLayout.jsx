import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";

const PublicLayout = () => {
  return (
    <div >

      <h1>Public Layout</h1>

      <Outlet />
    </div>
  );
};

export default PublicLayout;
