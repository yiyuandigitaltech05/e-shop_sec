import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Router from "@/Routers/Router";
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
