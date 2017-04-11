import CounterAction from '../actions/counterAction';

const Dec = {
    decrement: 0
}

function DecCounter(value = Dec, action){
    switch(action.type){
        case CounterAction.DECREMENT:
            return Object.assign({}, value, {decrement: value.decrement-1});
        default:
            return value;
    }
}

export default DecCounter;