import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Router from "@/Routers/Router";
const Layout = () => {
  return (
    <div className="flex flex-column min-h-screen">
      <Header />
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
