import React, {Component} from 'react';
import {firebaseApp} from '../firebase';


class TodoList extends Component{
    constructor(){
        super();
        this.state={
            todos: []
        }
    }
    componentWillMount(){
        let arr = this.state.todos;
        const x = firebaseApp.database().ref().child('/todos');
        x.on('child_added', (snapshot) => {
                let obj = snapshot.val();
                obj.idx = snapshot.key;
                arr.push(obj);
            });
            this.setState({todos: arr});
    }
    remove(val){
        const ref = firebaseApp.database().ref().child('/todos/'+val.idx);
        ref.remove().then(() => {
            let x = val.idx
            let allTodos = this.state.todos;
            let index;
            for (var i=0; i < allTodos.length; i++){
                if (allTodos[i].idx === x){
                    index = i;
                }
            }
            allTodos.splice(index,1);
            this.setState({todos: allTodos});
        });
    }

    render(){
        return(
            <div>
                <h3>Todo List</h3>
                <ul>
                    {
                        this.state.todos.map((x,y) => {
                            return(
                                    <li key={y}>
                                        {x.todo}
                                        <button 
                                        onClick={this.remove.bind(this,x)}>
                                        remove
                                        </button>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default TodoList;