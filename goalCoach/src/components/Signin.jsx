import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';

class Signin extends Component{
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

    signIn(){
        console.log('ths.state',this.state);
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error: error});
        })

        }

    render(){
        return(
            <div>
                <h2>Sign In</h2>
                <div>
                    <input
                    onChange={event => this.setState({email: event.target.value})} 
                    type="text" 
                    placeholder="email"/>
                    <input
                    onChange={event => this.setState({password: event.target.value})} 
                    type="password" 
                    placeholder="password"/>
                    <button onClick={() => this.signIn()}>Sign in</button>
                </div>
                <div>{this.state.error.message}</div>
                <div>
                    <Link to={'/signup'}>Sign Up instead</Link>
                </div>
            </div>
        )
    }
}


export default Signin;