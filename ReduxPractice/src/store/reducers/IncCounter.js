import CounterAction from '../actions/counterAction';

const Inc = {
    increment: 0
}

function IncCounter(value = Inc, action){
    switch(action.type){
        case CounterAction.INCREMENT:
            return Object.assign({}, value, {increment: value.increment+1});
        case CounterAction.INCREMENT_WITH_VALUE:
            return Object.assign({}, value, {increment: value.increment+action.value});
        default:
            return value;
    }
}

export default IncCounter;