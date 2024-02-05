import { SET_LOGIN } from "./actionType";

const initialstate={
    login:false
}

export const userReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SET_LOGIN:return{...state,login:true};
        default:return{...state,login:false};
    }
}