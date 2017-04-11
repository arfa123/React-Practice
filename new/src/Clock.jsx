import React, {Component} from 'react';
import './App.css';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log(this.props);
    }
    componentWillMount(){
        this.getTimeUntill(this.props.propDeadline);
    }
    componentDidMount(){
        setInterval(() => this.getTimeUntill(this.props.propDeadline),1000);
    }
    leading0(num){
        return num < 10 ? '0'+num : num;
    }
    getTimeUntill(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60)%24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
            days, hours, minutes, seconds
        });
    }
    render(){
        
        return(<div>
            <div className="ClockDay">{this.leading0(this.state.days)} days</div>
            <div className="ClockHour">{this.leading0(this.state.hours)} hours</div>
            <div className="ClockMin">{this.leading0(this.state.minutes)} minutes</div>
            <div className="ClockSec">{this.leading0(this.state.seconds)} seconds</div>
        </div>);
    }
}

export default Clock;