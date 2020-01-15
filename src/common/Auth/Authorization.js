import React from "react";

export default function Authorization(allowedRoles) {
  return function(WrappedComponent) {
    return function(props) {
      const role = "admin"; //CurrentUser.get();

      //if (allowedRoles.includes(role)) {
      if (role === allowedRoles[0]) {
        return <WrappedComponent {...props} />;
      }

      return <h1>404! Page not found!</h1>;
    };
  };
}
