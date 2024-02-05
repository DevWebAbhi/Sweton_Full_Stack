import { SET_VIDEOS } from "./actionType";

const initialstate={
    videos:[]
}

export const videoReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SET_VIDEOS:return {...state,videos:payload};
        default:return{
            videos:[]
        };
    }
}