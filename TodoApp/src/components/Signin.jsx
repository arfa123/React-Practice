import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class Signin extends Component{
    login(){
        let user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((user) => {
            console.log(user);
            this.context.router.push({
                pathname: '/todo'
            });
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    render(){
        return(
            <div>
                <h2>Login</h2>
                    <label htmlFor="email">
                        <input ref="email" type="text" id="email" placeholder="Enter email"/>
                    </label>
                    <label htmlFor="password">
                        <input ref="password" type="password" id="password" placeholder="Enter password"/>
                    </label>
                    <button onClick={this.login.bind(this)}>Login</button>
                <Link to="/signup">Create an account</Link>
            </div>
        )
    }
}
Signin.contextTypes={
    router: React.PropTypes.object
}

export default Signin;