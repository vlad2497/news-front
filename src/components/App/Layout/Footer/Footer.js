import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/admin/home">Главная</Link>
        </li>
        <li>
          <Link to="/admin/business">Политика</Link>
        </li>
        <li>
          <Link to="/admin/science">Наука</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
