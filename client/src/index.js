import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "assets/css/material-dashboard-react.css?v=1.5.0";
import indexRoutes from "routes/index.jsx";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { store } from "./store/index";

const hist = createBrowserHistory();

=======
import { createStore } from "redux"
<<<<<<< HEAD
import {store} from './store/index'
=======
import rootReducer from 'reducers/index'
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
import { Provider } from 'react-redux'

const hist = createBrowserHistory();

<<<<<<< HEAD
=======
const store = createStore(rootReducer);

>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
console.log(store.getState())
console.log(store.getState())

>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} component={prop.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
