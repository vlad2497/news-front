import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { observer } from "mobx-react";
import store from "./../../../../store";
import "./style.scss";

const Header = observer(({ match }) => {
  let history = useHistory();
  const { authStore } = useContext(store);

  const logout = () => {
    authStore.logoutRequest().then(() => {
      history.push("/login");
    });
  };

  return (
    <div className="menu">
      <img className="menu__img" src="/logo.png" alt="logo" />
      <ul className="nav">
        <li className="nav__link">
          <Link to="/admin/home">Главная</Link>
        </li>
        <li className="nav__link">
          <Link to="/admin/business">Политика</Link>
        </li>
        <li className="nav__link">
          <Link to="/admin/science">Наука</Link>
        </li>
      </ul>
      <div className="menu__button-logout" onClick={logout}>
        Выйти
      </div>
    </div>
  );
});

export default Header;
