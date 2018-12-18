import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router"; // react-router v4
import { ConnectedRouter } from "connected-react-router";

import createStore, { history } from "./store";

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
        <ConnectedRouter history={history}>
          <Switch>
            <AuthRoute path="/login" component={Login} />
            <AuthRoute path="/register" component={Register} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
