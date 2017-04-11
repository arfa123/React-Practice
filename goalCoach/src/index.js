import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router,Route,browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import reducer from './reducers';
import {logUser} from './actions';
import App from './components/App';
import Signup from './components/Signup';
import Signin from './components/Signin';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
        //console.log('user has Signin or up',user);
        const email = user.email;
        store.dispatch(logUser(email))
        browserHistory.push('/app');
    }
    else{
        //console.log('user has signedout or still needs',user);
        browserHistory.replace('/signin');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path='/' history={browserHistory}>
            <Route path='/app' component={App}/>
            <Route path='/signin' component={Signin}/>
            <Route path='/signup' component={Signup}/>      
        </Router>
    </Provider>,
    document.getElementById('root')
)