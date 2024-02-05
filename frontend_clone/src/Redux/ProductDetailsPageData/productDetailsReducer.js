import { SET_DATA,SET_IMAGE_ARRAY ,SET_SERISES} from "./actionType";

const initialstate={
    SpeakerDetailData:{},speakerImages:[],series:"PT Series"
}

export const productDetailsReducer=(state=initialstate,{type,payload})=>{
    switch(type){
        case SET_DATA:{return{...state,SpeakerDetailData:payload,speakerImages:payload.images?payload.images:[]}};
        case SET_SERISES:{return{...state,series:payload};}
        default:return{SpeakerDetailData:{},speakerImages:[],series:"PT Series"};
    }
}
