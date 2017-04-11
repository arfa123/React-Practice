import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'June 25, 2017',
            newDeadline: ''
        }
    }
    changeDeadline(){
        this.setState({
            deadline: this.state.newDeadline,
        });
    }
    render(){
        return(
            <div className='App'>
                <div className="AppTitle">Countdown to {this.state.deadline}</div>
                <Clock propDeadline={this.state.deadline}/>
                <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})}/>
                <button onClick={() => this.changeDeadline()}>Submit</button>
                
            </div>
        );
    }
}
export default App;