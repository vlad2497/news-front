import React from "react";
import "./style.scss";

export const PasswordInput = ({ meta, input }) => {
  return (
    <div className="input-wrapper">
      <label className="input-wrapper__label">Пароль</label>
      <input className="input-wrapper__input" type="password" {...input} />
      {meta.error && meta.visited && !meta.active && (
        <p className="input-wrapper__error">{meta.error}</p>
      )}
    </div>
  );
};
