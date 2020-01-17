import React, { useContext, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Admin from "./../Pages/Admin";
import Login from "./../../components/Auth/Login";
import "./App.scss";
import PrivateRoute from "./../../common/Routes/PrivateRoute";
import NoPage from "./Layout/NoPage";
import { observer } from "mobx-react";
import store from "./../../store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = observer(() => {
  const { authStore } = useContext(store);

  useEffect(() => {
    if (authStore.accessToken) {
      authStore.changeLoading(true);
      authStore.userRequest();
    }
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
});

export default App;
