import {SET_GOALS} from '../constants';

export default (state = [], action) => {
    switch(action.type){
        case SET_GOALS:
            console.log('SET_GOALS',action);
            const goals = action.goals;
            return goals;
        default:
            return state;
    }
}