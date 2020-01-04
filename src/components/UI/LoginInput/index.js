import React from "react";
import "./style.scss";

export const LoginInput = ({ input, meta }) => {
  return (
    <div className="input-wrapper">
      <label className="input-wrapper__label">Логин</label>
      <input className="input-wrapper__input" type="text" {...input} />
      {meta.error && meta.visited && !meta.active && (
        <p className="input-wrapper__error">{meta.error}</p>
      )}
    </div>
  );
};
