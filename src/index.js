import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, browserHistory } from "react-router";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import AppContainer from "./containers/AppContainer";
import GameStatisticsContainer from "./containers/GameStatisticsContainer";
import registerServiceWorker from "./registerServiceWorker";

import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
      <Route path="/statistics" component={GameStatisticsContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
