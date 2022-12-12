
export const ADD="ADD"
export const SUBSTRACTION="SUBSTRACTION"
export const MULTIPLICATION="MULTIPLICATION"
export const DIVIDE="DIVIDE"
export const CLEAR="CLEAR"

function add(){
    return{
        type:ADD,
    } 
}
function sub(){
    return{
        type:SUBSTRACTION,
    } 
}
function multiplication(){
    return{
        type:MULTIPLICATION,
    } 
}
function clear(){
    return{
        type:CLEAR
    }
}
function divide(){
    return{
        type:DIVIDE
    }
}
export {clear,multiplication,sub,add,divide}