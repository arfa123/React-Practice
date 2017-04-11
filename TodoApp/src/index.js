import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {firebaseApp} from './firebase';

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
        console.log('user has Signin or up',user);
    }
    else{
        console.log('user has signedout or still needs',user);
    }
})

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);