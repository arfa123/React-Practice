import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../constants.js';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    return action;
}
export const deletReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleted', action);
    return action;
}
export const clearReminder = () => {
    const action = {
        type: CLEAR_REMINDER
    }
    return action;
}