<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/index";

const defaultState = {
  auth: { isAuthenticated: false },
  error: { message: null },
  polls: [],
  currentPoll: {
    _id: "5b086e20f7d2381502ce0e46",
    options: [],
    question: "test_poll"
  }
};

export const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
);
=======
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
