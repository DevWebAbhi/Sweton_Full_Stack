import axios from "axios";
import { SET_VIDEOS } from "./actionType";
const REACT_APP_URL=process.env.REACT_APP_URL;
export const getVideos=(setLoading,setError)=>async(dispatch)=>{
    try {
        setError(false);
        setLoading(true);
        const data= await axios.get(`https://sweton-clone-backend.onrender.com/videos`);
        console.log(data.data.data)
        dispatch({type:SET_VIDEOS,payload:data.data.data});
        setLoading(false);
    } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error)
    }
}