import {SIGNED_IN, SET_GOALS} from '../constants'

export const logUser = (email => {
    const action = {
        type: SIGNED_IN,
        email: email
    }
    return action;
})
export const setGoals = (goals => {
    const action = {
        type: SET_GOALS,
        goals: goals
    }
    return action;
})