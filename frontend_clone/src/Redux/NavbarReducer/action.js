import { HOME_NAVBAR } from "./actionType"

export const HNTrue = ()=>async(dispatch)=>{
    try {
        dispatch({type:HOME_NAVBAR,payload:''})
    } catch (error) {
        console.log(error)
    }
}

export const HNFalse = ()=>async(dispatch)=>{
    try {
        dispatch({type:'default',payload:''})
    } catch (error) {
        console.log(error)
    }
}