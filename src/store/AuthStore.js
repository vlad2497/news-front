import { decorate, observable, action } from "mobx";
import { login, logout, refresh, getUser } from "./../externalAPI";
import {
  setLocaleStorageValue,
  checkExpires,
  clearLocaleStorageValue,
  setAuthorizationHeader
} from "./../helpers";

class AuthStore {
  constructor() {
    setAuthorizationHeader(localStorage.getItem("access_token"));
  }

  accessToken = localStorage.getItem("access_token");
  user = {};
  loading = false;

  loginRequest(data) {
    return new Promise((resolve, reject) => {
      login(data)
        .then(response => {
          let { access_token, token_type } = response.data;

          setAuthorizationHeader(`${token_type} ${access_token}`);
          setLocaleStorageValue(response.data);
          this.accessToken = access_token;

          this.userRequest();

          resolve();
        })
        .catch(error => {
          localStorage.removeItem("access_token");
          this.accessToken = "";

          reject(error);
        });
    });
  }

  logoutRequest() {
    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          clearLocaleStorageValue();
          this.accessToken = "";
          this.user = {};
          resolve();
        })
        .catch(error => {
          clearLocaleStorageValue();
          this.accessToken = "";
          this.user = {};
          reject(error);
        });
    });
  }

  userRequest() {
    getUser()
      .then(response => {
        this.user = response.data;
        this.changeLoading(false);
      })
      .catch(error => {
        this.changeLoading(false);
        if (error.response.status === 401)
          if (localStorage.getItem("refresh_token") && checkExpires()) {
            this.changeLoading(true);
            this.refreshRequest();
          } else this.logoutRequest();
      });
  }

  refreshRequest() {
    refresh()
      .then(response => {
        let { access_token, token_type } = response.data;
        setLocaleStorageValue(response.data);
        setAuthorizationHeader(`${token_type} ${access_token}`);
        this.accessToken = access_token;
        this.userRequest();
      })
      .catch(() => {
        this.changeLoading(false);
        this.logoutRequest();
      });
  }

  changeLoading(value) {
    this.loading = value;
  }
}

decorate(AuthStore, {
  accessToken: observable,
  user: observable,
  userRequest: action,
  loginRequest: action,
  loading: observable,
  changeLoading: action
});

export default new AuthStore();
