import { routerMiddleware } from "connected-react-router";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

import createRootReducer from "./reducers";
import sagas from "./sagas";

export const history = createBrowserHistory();

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));

  if (process.env.NODE_ENV !== "production") {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === "function") {
      middleware = compose(
        middleware,
        devToolsExtension()
      );
    }
  }

  const store = createStore(createRootReducer(history), middleware);
  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(require("./reducers").default);
    });
  }
  return store;
}
