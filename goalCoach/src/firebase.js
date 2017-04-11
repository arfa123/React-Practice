import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCAaxTXrnYNQFETYfIQs6pCxCEDIDopUdo",
    authDomain: "goalcoach-e2c53.firebaseapp.com",
    databaseURL: "https://goalcoach-e2c53.firebaseio.com",
    storageBucket: "goalcoach-e2c53.appspot.com",
    messagingSenderId: "358262176576"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoal');