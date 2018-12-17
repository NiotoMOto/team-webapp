import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import createStore from "./store";

import Home from "./pages/Home";
import Login from "./pages/Login";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
