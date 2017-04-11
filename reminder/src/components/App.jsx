import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addReminder,deletReminder,clearReminder} from '../actions';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
        }
    }
    addReminder(){
        if (this.state.text !== ''){
            document.getElementsByTagName('input')[0].value='';
            this.setState({text: ''});
            this.props.addReminder(this.state.text);
        }
    }
    deletReminder(id){
        this.props.deletReminder(id);
    }
    renderReminders(){
        const reminders = this.props.reminders;
        return(
            <ul>
                {reminders.map(x =>{
                    return(
                        <li key={x.id}>
                            <div>
                                {x.text}
                                <button onClick={() => this.deletReminder(x.id)}>X</button>
                            </div>
                        </li>
                    );
                })
                }
            </ul>
        );
    }
    render(){
        return(
            <div>
                <div>
                    <h2 className="heading">Reminder Pro</h2>
                </div>
                <div>
                    <div className="input">
                        <input 
                        type="text" 
                        placeholder='Enter reminder' 
                        onChange={event => this.setState({text: event.target.value})}/>
                        <button onClick={() => this.addReminder()}>Add Reminder</button>
                    </div>
                    <div className="list">
                        {this.renderReminders()}
                    </div>
                    <div className="removeAll">
                        <button onClick={() => this.props.clearReminder()}>Clear All Reminders</button>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        reminders: state,
    }
}

export default connect(mapStateToProps, {addReminder,deletReminder,clearReminder})(App);