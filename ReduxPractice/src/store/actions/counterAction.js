export default class CounterAction{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';
    static INCREMENT_WITH_VALUE = 'INCREMENT_WITH_VALUE';

    static increment(){
        return{
            type: CounterAction.INCREMENT,
        }
    }
    static decrement(){
        return{
            type: CounterAction.DECREMENT
        }
    }
    static incrementWithValue(val){
        return{
            type: CounterAction.INCREMENT_WITH_VALUE,
            value: val
        }
    }
}