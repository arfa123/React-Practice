import React, {Component} from 'react';
import {connect} from 'react-redux';
import CounterAction from '.././store/actions/counterAction';

function mapStateToProps(state){
    console.log('hello',state);
    return{
        IncCount: state.IncCounter.increment,
        DecCount: state.DecCounter.decrement
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment: () => dispatch(CounterAction.increment()),
        decrement: () => dispatch(CounterAction.decrement()),
        inc: (value) => {
            return dispatch(CounterAction.incrementWithValue(value));
        }
    }
}

class App extends Component{
    constructor(){
        super();
        this.state={
            counter:0
        }
    }
    value(ev){
        console.log(ev.target.value);
        if(ev.target.value !== ''){
            this.setState({
            counter: parseInt(ev.target.value),
        });
        }
    }
    handle(){
        this.props.inc(this.state.counter);
    }
    render(){
        return(
            <div>
                App {this.props.IncCount + this.props.DecCount}
                <div>
                    <input type="number" onChange={(ev) => {this.value(ev)}} />
                    <button onClick={() => this.handle()}>Submit</button>
                    <button onClick={this.props.increment}>INCREMENT</button>
                    <button onClick={this.props.decrement}>DECREMENT</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);