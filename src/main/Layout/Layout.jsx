import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Router from "@/Routers/Router";
import AdminNav from "@/admin/AdminNav";
import { useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation()


  return (
    <div className="flex flex-column min-h-screen">
      { location.pathname.startsWith("/dashboard") ? <AdminNav/> : <Header /> }
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
