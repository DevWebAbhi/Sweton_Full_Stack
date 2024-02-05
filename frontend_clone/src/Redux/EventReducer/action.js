import { SET_EVENTS } from "./actionType";
import axios from "axios";
const REACT_APP_URL=process.env.REACT_APP_URL;

export const setEvents=(setLoading,setError)=>async(dispatch)=>{
    console.log(REACT_APP_URL)
    try {
        setError(false);
        setLoading(true);
        const data=await axios.get(`https://sweton-clone-backend.onrender.com/events`);
        console.log(data.data.data);
        dispatch({type:SET_EVENTS,payload:data.data.data});
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(true);
        dispatch({type:'defult',payload:""});
        console.log(error);
    }
}