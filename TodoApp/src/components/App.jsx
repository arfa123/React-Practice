import React, {Component} from 'react';
import './App.css';

class App extends Component{
    render(){
        return(
            <div>
                <div className="heading">
                    <h1>Todo App</h1>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default App;