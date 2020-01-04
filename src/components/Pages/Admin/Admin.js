import React from "react";
import Apps from "./../Apps";
import Music from "./../Music";
import Home from "./../Home";
import Header from "./../../App/Layout/Header";
import Footer from "./../../App/Layout/Footer";
import { Route } from "react-router-dom";

const Admin = ({ match }) => {
  return (
    <div>
      <Header />
      <Route path={`${match.path}/home`} component={Home} />
      <Route path={`${match.path}/apps`} component={Apps} />
      <Route path={`${match.path}/music`} component={Music} />
      <Footer />
    </div>
  );
};

export default Admin;
