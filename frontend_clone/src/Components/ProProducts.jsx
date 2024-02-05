import React, { useState } from 'react'
import CommonNavbar from './CommonNavbar'
import axios from 'axios'
import '../Styles/ProProducts.css';
import { Box,Button,Image } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import {useDispatch,useSelector} from 'react-redux';
import Cookies from 'js-cookie';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  AlertIcon,Alert
} from '@chakra-ui/react'
const ProProducts = () => {
  const [Data,setData]=useState([]);
  const [series,setSeries]=useState([]);
  const navigate=useNavigate();
  const selector=useSelector(state=>state.productDetailsReducer);
  const dispatch=useDispatch();
  const [alertMessage,setAlertMessage]=useState({message:"Added To Cart",quotes:'Thank You!'});
  const { isOpen, onOpen, onClose } = useDisclosure()
  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 0 },
        items: 1,
        slidesToSlide: 1
      }
  };

  function handleDetailPageNavigation(e){
    localStorage.setItem("productDetailSweton",JSON.stringify(Data[e.target.className]));
    navigate('/proproducts/proLoudSpeakerDetail');
  }

  async function getData(){
    try {
      const data=await axios.get(`https://sweton-clone-backend.onrender.com/proloud`);
      const serieses=await axios.get(`https://sweton-clone-backend.onrender.com/proSPKSeries`);
      setData(data.data.data);
      setSeries(serieses.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  useState(()=>{
    getData();
  },[])

 function handleNav(e){
  navigate(e);
 }

  function handleNavSetCategory(e){
    localStorage.setItem("seriesTypeProloudspeaker",`${e}`);
    navigate('/proproducts/series');
  }

  async function handleCart(e){
    console.log(e.target.id)

    try {
      const allCookies = Cookies.get();
      if (allCookies['sweton-token-authentication-user']) {
        const headers = {
          'Authorization': allCookies['sweton-token-authentication-user']
        };
        console.log(e.target.id)
        const post = await axios.post(`${process.env.REACT_APP_URL}cart/post`, {id:e.target.id}, { headers });
       console.log(post)
        if(post.data.data.msg=='not authorized'){
          setAlertMessage({message:'Not Authenticated',quotes:'Try login again'});
          onOpen();
        }else if(post.data.data.msg=='authorized'){
          console.log(post.data.data)
          localStorage.setItem('seeton-web-cart',JSON.stringify(post.data.data));
          setAlertMessage({message:'Added To Cart',quotes:'Thank You!'});
          onOpen();
        }
      }else{
        setAlertMessage({message:'Login First',quotes:'Thank You!'});
        onOpen();
      }
      console.log('handleCart')
    } catch (error) {
      setAlertMessage({message:'Error Occured',quotes:'Try Login Again'});
      onOpen();
      console.log(error)
    }
  }

  return (
    <div>
      <CommonNavbar headdingName={"Pro Loudspeaker"}/>
      <div className='pro-series-navigator' >
          <p onClick={e=>handleNav('/')}>HOME</p>
          <p>|</p>
          <p >PRO LOUDSPEAKER</p>
          
         
         
        </div>
      <div className='series-button-div'>
      {
        series.map((e,idx)=>(
          <button  key={idx} onClick={et=>handleNavSetCategory(e.title)} className='series-button-div-button'>{e.title}</button>
        ))
      }
       </div>
      {
        series.map((e,idx)=>(
          <>
          <div className='pro-series-name-div' id='pro-series-name-div'>{e.title}</div>
          <div>
          {
  Data.map((ex,idxd) => {
    console.log('e.title:', e.title);
    console.log('ex.series:', ex.series);
  
    return e.title.toLowerCase() === ex.series.toLowerCase() ? (
      <div key={ex.id} className='pro-product-main-div'>
        <div className='pro-product-main-div-div'>
          <div>
            <div className='pro-product-main-div-div-div-div-title'>{ex.title}</div>
            <p>{ex.description}</p>
            <div className='pro-product-main-div-div-div-image'>
            
            <Image key={idx} src={ex.images[0]} display='block' width='100%' alt="Image" />
                
     
            </div>
          </div>
          <div>
            <div className='pro-product-main-div-div-div-key-features'>Key Features</div>
            <table className='pro-product-main-div-div-div-key-features-table'>
              <tr>
                <td>Program Power</td>
                <td>{ex.programPower}</td>
              </tr>
              <tr>
                <td>Voice Coil</td>
                <td>{ex.voiceCoil}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>{ex.response}</td>
              </tr>
              <tr>
                <td>Sensitivity 1W/1M</td>
                <td>{ex.senstivity}</td>
              </tr>
            </table>

            <div className='pro-product-main-div-div-div-div-specifications-parameters'>
              <div>
                <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Specification</div>
                <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                <td>Nominal Diameter</td>
                <td>{ex.nominalDiameter}</td>
              </tr>
              <tr>
                <td>Nominal Impedance</td>
                <td>{ex.nominalImpedance}</td>
              </tr>
              <tr>
                <td>Response</td>
                <td>{ex.response}</td>
              </tr>
              
             
            </table>
              </div>
              <div>
              <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Parameters</div>
              <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
              <tr>
                <td>Resonant Frequency </td>
                <td><b>FS</b></td>
                <td>{ex.resonantFrequency}</td>
              </tr>
              <tr>
                <td>DC Resistance </td>
                <td><b>RE</b></td>
                <td>{ex.DCResistance}</td>
              </tr>
              <tr>
                <td>Electrical Q </td>
                <td><b>QES</b></td>
                <td>{ex.electrialQ}</td>
              </tr>
              
            </table>
              </div>
            </div>

            <div className='pro-product-main-div-div-div-div-specifications-parameters'>
              <div>
                <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Mounting Info</div>
                <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
                <tr>
                <td>Overall Diameter</td>
                <td>{ex.overAllDiameter}</td>
              </tr>
              <tr>
                <td>Bolt Circle Diameter</td>
                <td>{ex.boltCircleDiameter}</td>
              </tr>
              <tr>
                <td>Baffle Cutout Diameter</td>
                <td>{ex.baffleCutOutDiameter}</td>
              </tr>
              
             
            </table>
              </div>
              <div>
              <div className='pro-product-main-div-div-div-div-specifications-parameters-div-title'>Recone Kit</div>
              <table className='pro-product-main-div-div-div-div-specifications-parameters-table'>
              <tr>
                <td>Recone Kit Number </td>
                <td>{ex.reconeKitNumber}</td>
              </tr>
              
            </table>
              </div>
            </div>
            
          </div>
          <div >
            <div>
              <Image width='100%'  src={ex.responseCurve}/>
            </div>
            <div className='ReadMore-for-proloudspk'>
              <button className={idxd} onClick={handleDetailPageNavigation}>Read More</button>
            </div>
            <Box marginTop={'2rem'}>
              <Button id={ex._id} backgroundColor={'transparent'} padding={'0.3rem 0.4rem'} border={'1px solid red'} onClick={handleCart}>Add To Cart</Button>
            </Box>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  })
}
          </div>
          </>
        ))
      }
     <Footer/>
     <Alerter isOpen={isOpen} onOpen={onOpen} onClose={onClose} message={alertMessage.message} quotes={alertMessage.quotes}/>
    </div>
  )
}



export default ProProducts


function Alerter({ isOpen, onOpen, onClose, message,quotes }){
  
  const cancelRef = React.useRef()

  return (
    <>
      <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent width={'60%'}  margin={'auto'} marginTop={'2rem'} borderRadius={'0.3rem'} padding={'1rem'} backgroundColor={'#2ECC71'}>
          <AlertDialogBody color={'white'} textAlign={'center'} fontSize={'2rem'}>
          
            </AlertDialogBody>
            <AlertDialogBody color={'white'} width={'min-content'} margin={'auto'}  fontSize={'2rem'}>
            <AlertIcon boxSize='40px' mr={0} />
            </AlertDialogBody>
            <AlertDialogBody color={'white'} marginTop={'1.5rem'} textAlign={'center'} fontSize={'2rem'}>
              {message}
            </AlertDialogBody>

            <AlertDialogBody color={'white'} marginTop={'1rem'} textAlign={'center'} fontSize={'1.3rem'}>
              {quotes}
            </AlertDialogBody>

            <AlertDialogFooter width={'min-content'} margin={'auto'}>
              <Button ref={cancelRef} onClick={onClose} marginTop={'5rem'} padding={'0.3rem 1.5rem'} border={'none'} borderRadius={'0.5rem'} color={'white'} fontSize={'1.5rem'} backgroundColor={'#76D7C4'}>
                Ok
              </Button>
             
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </Alert>
    </>
  )
}