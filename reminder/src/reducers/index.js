import {ADD_REMINDER,DELETE_REMINDER,CLEAR_REMINDER} from '../constants.js';

const reminder = (action) => {
    return{
        text: action.text,
        id: Math.random()
    }
}
const removeById = (state = [], id) => {
    const reminders = state.filter(y => y.id !== id);
    console.log('new reduced:',reminders);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminder',reminders);
            return reminders;
        case DELETE_REMINDER:
            console.log(action);
            reminders = removeById(state,action.id);
            return reminders;
        case CLEAR_REMINDER:
            reminders = [];
            return reminders;
        default:
            console.log('state',state);
            return state;
    }
}

export default reminders;