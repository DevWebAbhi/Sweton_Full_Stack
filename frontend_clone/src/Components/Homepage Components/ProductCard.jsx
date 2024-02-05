import { Box,Button,Text,Image } from '@chakra-ui/react'
import '../../Styles/productCardStyle.css';
import {setSeriesDisplayType} from '../../Redux/ProductDetailsPageData/action';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function ProductCard({state}){
  const dispatch=useDispatch();
  const navigate=useNavigate();
   function handleNavigationSeries(e){
    console.log(e);
   
    localStorage.setItem("seriesTypeProloudspeaker",`${e}`);
    navigate('/proproducts/series');
   }
    return(
      <Box padding='0.5rem' height='26.5rem'   paddingTop='0.3rem' fontSize='medium' textAlign='start'   maxWidth='min-content' marginTop='2rem'>
        <img src={state.spkimg} />
        <div className='spk-info-div'>
        <p><b>Contineous Progrm Power :</b>{state.continueousProgramPower}</p>
        <p><b>Senstivity :</b>{state.senstivity}</p>
        <p><b>Voice Coil Diameter : </b>{state.voiceCoilDiameter}</p>
        </div>
        
        <button className='Raed-More-button' onClick={()=>handleNavigationSeries(state.title)}>Read More</button>
        
      </Box>
    )
  }

  export default ProductCard;