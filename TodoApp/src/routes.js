import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import Todo from './components/Todo';
import Signin from './components/Signin';
import Signup from './components/Signup';

class Routes extends Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Signin}></IndexRoute>
                    <Route path='/signup' component={Signup}></Route>
                    <Route path='/todo' component={Todo}></Route>
                </Route>
            </Router>
        )
    }
}

export default Routes;