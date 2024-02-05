import { SET_EVENTS } from "./actionType";
const initialstate={
    events:[]
}

export const eventReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SET_EVENTS:return{...state,events:payload};
        default :return{events:[]}
    }
}