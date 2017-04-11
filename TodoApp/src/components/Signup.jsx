import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class Signup extends Component{
    createUser(ev){
        ev.preventDefault();
        let user = {
            name: this.refs.name.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        firebaseApp.auth().createUserWithEmailAndPassword(user.email,user.password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
    render(){
        return(
            <div>
                <h2>Sign Up</h2>
                <form action="">
                    <label htmlFor="name">
                        <input type="text" id="name" placeholder="Enter Name" ref="name"/>
                    </label>
                    <label htmlFor="email">
                        <input type="email" id="email" placeholder="Enter Email" ref="email"/>
                    </label>
                    <label htmlFor="password">
                        <input type="password" id="password" placeholder="Enter password" ref="password"/>
                    </label>
                    <button onClick={this.createUser.bind(this)}>Sign Up</button>
                </form>
                <Link to="/">Login</Link>
            </div>
        )
    }
}

export default Signup;