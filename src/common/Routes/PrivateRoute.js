import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import store from "./../../store";

const PrivateRoute = observer(({ component: RouteComponent, ...rest }) => {
  const { authStore } = useContext(store);

  return (
    <Route
      {...rest}
      render={routeProps =>
        Object.keys(authStore.user).length ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
});

export default PrivateRoute;
