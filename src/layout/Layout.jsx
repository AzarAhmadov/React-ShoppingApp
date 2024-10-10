import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import CartContextProvider from "../context/CartContext";
import Header from "../common/Header/Header";
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));
import Footer from "../common/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Middleware from "../middleware/MiddleWare";

const Layout = () => {
  return (
    <CartContextProvider>
      <Middleware>
        <div className="flex flex-col justify-between min-h-screen">
          <div>
            <Header />
            <Outlet />
            <Sidebar />
          </div>
          <Footer />
        </div>
        <ToastContainer position="top-left" />
      </Middleware>
    </CartContextProvider>
  );
};

export default Layout;