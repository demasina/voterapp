<<<<<<< HEAD
import { SET_CURRENT_USER } from "../actions/actionTypes";

const defaultState = {
  isAuthenticated: false,
  user: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    default:
      return state;
  }
};
=======
import {SET_CURRENT_USER} from '../actions/actionTypes'

const defaultState = {
    isAuthenticated: false,
    user: {}
}

export default (state= defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
        return {
            user: action.user
        }
        default:
        return state;
    }
}
>>>>>>> be22a6074dfd7d836596720731b1c09d83080c6d
