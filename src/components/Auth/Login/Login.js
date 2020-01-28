import React, { useContext, useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { observer } from "mobx-react";
import store from "./../../../store";
import "./style.scss";
import { LoginInput } from "./../../UI/LoginInput";
import { PasswordInput } from "./../../UI/PasswordInput";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
import { messages } from "./../../../messages";
import Loader from "react-loader-spinner";

const Login = observer(() => {
  const { authStore } = useContext(store);
  const history = useHistory();
  const [error, setError] = useState("");

  const onSubmit = values => {
    authStore.changeLoading(true);
    authStore
      .loginRequest(values)
      .then(() => {
        history.push("/admin/home");
      })
      .catch(() => {
        authStore.changeLoading(false);
        setError("Данные введены не верно!");
        //ToastsStore.error(messages.login.errors.incorrect);
      });
  };

  const validate = values => {
    const errors = {};

    if (!values.email) errors.email = messages.login.errors.email;
    if (!values.password) errors.password = messages.login.errors.password;

    return errors;
  };

  return !Object.keys(authStore.user).length ? (
    authStore.loading ? (
      <div className="form-wrapper">
        <Loader
          type="Puff"
          color="#40e1d1"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    ) : (
      <div className="form-wrapper">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="form login-form">
              <img className="form__img" src="/logo.png" alt="logo" />
              <h2 className="form__title">Вход</h2>

              <Field name="email" component={LoginInput} />
              <Field name="password" component={PasswordInput} />

              <button className="form__submit" type="submit">
                Войти
              </button>
              <p className="form__error">{error}</p>
            </form>
          )}
        />
        <ToastsContainer
          store={ToastsStore}
          position={ToastsContainerPosition.TOP_CENTER}
          color="white"
        />
      </div>
    )
  ) : (
    <Redirect to="/admin/home" />
  );
});

export default Login;
