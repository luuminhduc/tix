import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.authReducer);
  return (
    <Route
      render={(props) => {
        if (user) return <Component {...props} />;
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
