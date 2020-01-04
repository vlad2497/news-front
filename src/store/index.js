import { createContext } from "react";
import AuthStore from "./AuthStore";
import HomeStore from "./HomeStore";

const store = createContext({
  authStore: AuthStore,
  homeStore: HomeStore
});

export default store;
