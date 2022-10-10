import React from "react";
import PropTypes from 'prop-types';
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

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
}
export default DefaultLayout;
