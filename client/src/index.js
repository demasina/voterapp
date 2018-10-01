import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css"
import "assets/css/material-dashboard-react.css?v=1.5.0";
import {addAnswer} from "./actions/index"
import indexRoutes from "routes/index.jsx";
import { createStore } from "redux"
import rootReducer from 'reducers/index'
import { Provider } from 'react-redux'

const hist = createBrowserHistory();

const store = createStore(rootReducer);

console.log(store.getState())
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
