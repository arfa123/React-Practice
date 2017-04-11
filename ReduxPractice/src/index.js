import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {Provider} from 'react-redux';
import store from './store/index';



function inc(){
    store.dispatch({
        type:'increment with value',
        val:2,
    });
}

ReactDOM.render(
    <Provider store={store}>
        <div>
        <App/>
        <div>
            <button onClick={() => store.dispatch({type:'increment'})}>Increment</button><br/>
            <button onClick={() => store.dispatch({type:'decrement'})}>Decrement</button><br/>
            <button onClick={inc}>Increment with value</button>
        </div>
        </div>
    </Provider>
    ,
    document.getElementById('root')
);