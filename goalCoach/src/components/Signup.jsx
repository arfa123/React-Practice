import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error:{
                message: ''
            }
        }
    }

    signUp(){
        console.log('ths.state',this.state);
        const email = this.state.email;
        const password = this.state.password;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error: error});
        })

        }

    render(){
        return(
            <div>
                <h2>Sign up</h2>
                <div>
                    <input
                    onChange={event => this.setState({email: event.target.value})} 
                    type="text" 
                    placeholder="email"/>
                    <input
                    onChange={event => this.setState({password: event.target.value})} 
                    type="password" 
                    placeholder="password"/>
                    <button onClick={() => this.signUp()}>Sign up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
            </div>
        )
    }
}


export default Signup;