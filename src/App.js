import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch } from "react-router-dom";

import createStore from "./store";

import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./App.css";
const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <AuthRoute path="/register" component={Register} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
