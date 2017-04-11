import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';

class AddGoal extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }
    addGoal(){
        const {email} = this.props.user;
        goalRef.push({email, title: this.state.title});
    }
    render(){
        return(
            <div>
                <div>
                    <input
                    placeholder="Add a goal" 
                    onChange={event => this.setState({title: event.target.value})}
                    type="text"/>
                    <button onClick={() => this.addGoal()}>Submit</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    console.log('state in AddGoal.jsx:;',state);
    return {user};
}

export default connect(mapStateToProps, null)(AddGoal);