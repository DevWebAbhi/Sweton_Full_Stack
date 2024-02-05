import { SET_DATA,SET_IMAGE_ARRAY ,SET_SERISES} from "./actionType";
export const setSpeakerData=(data)=>async(dispatch)=>{
        try {
            dispatch({type:SET_DATA,payload:{...data}});
        } catch (error) {
            dispatch({type:'default',payload:{}});
           console.log(error); 
        }
}

export const setSeriesDisplayType=(data)=>async(dispatch)=>{
    try {
        console.log(data,"action--------")
        dispatch({type:SET_SERISES,payload:data});
    } catch (error) {
        dispatch({type:'default',payload:{}});
       console.log(error); 
    }
}
