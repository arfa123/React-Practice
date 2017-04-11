import React,{Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItems extends Component{
    completeGoal(){
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        console.log('aby:',email,title,serverKey);
        goalRef.child(serverKey).remove();
        completeGoalRef.push({email,title});
    }
    render(){
        console.log('jahil',this.props.goal);
        return(
            <div>
                <b>{this.props.goal.title}.</b> by <em>{this.props.goal.email}</em>
                <button onClick={() => this.completeGoal()}>Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    return{
        user
    }
}

export default connect(mapStateToProps, null)(GoalItems);