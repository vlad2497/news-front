import React, { useContext } from "react";
import store from "./../../store";
import { observer } from "mobx-react";

const Authentication = WrappedComponent => {
  //const appStore = useContext(store);
  return props => {
    const user = [{ name: "user epta" }];

    return <WrappedComponent {...props} user={user} /*store={appStore}*/ />;
  };
};

export default Authentication;
