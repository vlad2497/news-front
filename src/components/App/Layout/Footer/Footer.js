import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/admin/home">Home</Link>
        </li>
        <li>
          <Link to="/admin/apps">Apps</Link>
        </li>
        <li>
          <Link to="/admin/music">Music</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
