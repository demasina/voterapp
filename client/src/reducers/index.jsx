<<<<<<< HEAD
=======
<<<<<<< HEAD
import {combineReducers} from 'redux';
import auth from './auth';

export default combineReducers({
    auth
=======
import {answersReducer} from "./answers"
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
import { combineReducers } from "redux";
import auth from "./auth";
import { polls, currentPoll } from "./polls";
import error from "./error";

export default combineReducers({
<<<<<<< HEAD
  auth,
  currentPoll,
  error,
  polls
});
=======
    answersReducer
>>>>>>> 379cf132f3c5735726fa117955bf0fac2b8281b2
})
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
