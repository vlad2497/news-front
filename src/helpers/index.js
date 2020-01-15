import axios from "axios";

export const setLocaleStorageValue = ({
  token_type,
  access_token,
  refresh_token,
  expires_in
}) => {
  localStorage.setItem("access_token", `${token_type} ${access_token}`);
  localStorage.setItem("refresh_token", refresh_token);
  localStorage.setItem("expires_in", expires_in);
};

export const clearLocaleStorageValue = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("expires_in");
};

export const checkExpires = () => {
  let expiresDate = new Date();
  let currentDate = new Date();

  expiresDate.setSeconds(localStorage.getItem("expires_in"));

  return currentDate < expiresDate;
};

export const setAuthorizationHeader = access_token => {
  axios.defaults.headers.common["Authorization"] = access_token;
};
