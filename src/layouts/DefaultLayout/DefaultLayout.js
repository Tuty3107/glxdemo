import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper">{children} </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
