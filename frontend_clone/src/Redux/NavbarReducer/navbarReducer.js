import { HOME_NAVBAR } from "./actionType"
const initialstate={
    home:true
}

export const navbarReducer=(state=initialstate,{type,payload})=>{
      switch(type){
        case HOME_NAVBAR:return{...state,home:false}
        default:return{...state,home:false}
      }
}