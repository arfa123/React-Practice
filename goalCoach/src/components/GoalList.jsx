import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';
import {setGoals} from '../actions';
import GoalItems from './GoalItems';

class GoalList extends Component{
    componentDidMount(){
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const {email, title} = goal.val();
                const serverKey = goal.key;
                goals.push({email, title, serverKey});
            })
            console.log(goals);
            this.props.setGoals(goals);
        })
    }
    render(){
        console.log('this.goals',this.props.goals);
        return(
            <div>
               {this.props.goals.map((x,y) => {
                   return(
                       <GoalItems key={y} goal={x}></GoalItems>
                   )
               })}
            </div>
        )
    }
}

function mapStateToProps(state){
    const {goals} = state;
    return{
        goals
    }
}
export default connect(mapStateToProps, {setGoals})(GoalList);