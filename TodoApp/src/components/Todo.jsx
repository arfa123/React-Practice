import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import TodoList from './TodoList';

class Todo extends Component{
    constructor(){
        super();
        this.state={
            text: ''
        }
    }
    addTodo(){
        if(this.state.text !== ''){
            let todo = this.state.text;
            let x = firebaseApp.database().ref().child('/todos/');
            x.push({todo: todo}); 
        }
        this.refs.input.value = '';
        this.setState({text:''});
    }
    signOut(){
        firebaseApp.auth().signOut();
        this.context.router.push({
                pathname: '/'
            });
    }
    render(){
        return(
            <div>
                <input ref="input"
                onChange={(event) => {
                    this.setState({text: event.target.value})
                }} 
                type="text"/>
                <button onClick={() => this.addTodo()}>
                    Add Todo
                </button>
                <TodoList/>
                <button onClick={this.signOut.bind(this)}>Sign Out</button>
            </div>
        )
    }
}
Todo.contextTypes={
    router: React.PropTypes.object
}

export default Todo;