import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header/whiteHeader";

const PropertyLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default PropertyLayout;