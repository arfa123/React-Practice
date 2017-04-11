import {createStore} from 'redux';
import {combineReducers} from 'redux';
import IncCounter from './reducers/IncCounter';
import DecCounter from './reducers/DecCounter';

const RootReducer = combineReducers({
    IncCounter,
    DecCounter
});

let store = createStore(RootReducer);

store.subscribe(() => {
    console.log(store.getState());
});
export default store;