import { combineReducers } from "redux";
import { ADD,SUBSTRACTION,MULTIPLICATION,DIVIDE,CLEAR } from "../Actions/action";
const initial_state={
      num1:5,
      num2:6,
      res:0
}
const addreducers=(state=initial_state,action)=>{
    switch(action.type){
        case ADD:
            return{
                ...state,
                res:state.num1+state.num2

            }
        
        
        
            default:return state;
    }
}
const multiplyreducers=(state=initial_state,action)=>{
    switch(action.type){
        case MULTIPLICATION:
            return{
                ...state,
                res:state.num1*state.num2
            }
            default:return state;
    }
}

const subreducers=(state=initial_state,action)=>{
    switch(action.type){
        case SUBSTRACTION:
            return{
                ...state,
                res:state.num1-state.num2
            }
            default:return state;
    }
}
const dividereducer=(state=initial_state,action)=>{
    switch(action.type){
        case DIVIDE:
            return{
                ...state,
                res:state.num1/state.num2
            }
            default:return state;
    }
}
const clearreducer=(state=initial_state,action)=>{
    switch(action.type){
        case CLEAR:
            return{
                ...state,
                res:0
            }
            default:return state;
    }
}

const rootReducer=combineReducers({
    add:addreducers,
    subs:subreducers,
    multi:multiplyreducers,
    divide:dividereducer,
    clear:clearreducer
})
export default rootReducer