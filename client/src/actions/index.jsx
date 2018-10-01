import * as types from './constants.jsx';

export const addAnswer =  ( count) => {
    return {
        type: types.ADD_ANSWER,
        count
    };
}
export const handler =  ( answers) => {
    return {
        type: types.HANDLE_ANSWERS,
        answers
    };
}