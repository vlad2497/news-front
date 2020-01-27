import React from "react";
import Business from "./../Business";
import Science from "./../Science";
import Home from "./../Home";
import Header from "./../../App/Layout/Header";
import Footer from "./../../App/Layout/Footer";
import { Route } from "react-router-dom";

const Admin = ({ match }) => {
  return (
    <div>
      <Header />
      <Route path={`${match.path}/home`} component={Home} />
      <Route path={`${match.path}/business`} component={Business} />
      <Route path={`${match.path}/science`} component={Science} />
      <Footer />
    </div>
  );
};

export default Admin;
