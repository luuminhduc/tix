import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeRoute from "./helpers/guards/homeRoute";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <HomeRoute component={Home} />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
