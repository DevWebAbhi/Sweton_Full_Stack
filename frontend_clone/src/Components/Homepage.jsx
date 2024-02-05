import React,{useEffect, useState} from 'react'
import Cookies from 'js-cookie';
import '../Styles/homepagenavbar.css'
import NavbarHome from './NavbarHome'
import logonew from '../Assets/logonew.png'
import { Box,Button,Text } from '@chakra-ui/react'
import ProLoudspk from './Homepage Components/ProLoudspk'
import ProSPKCarausal from './Homepage Components/ProSPKCarausal'
import banner1 from '../Assets/banner1.JPG'
import banner2 from '../Assets/banner2.JPG'
import bannermid from '../Assets/bannermid.JPG'
import HmoeSPK from './Homepage Components/HomeSPK'
import ComparisionandVideo from './Homepage Components/ComparisionandVideo'
import Introduction from './Homepage Components/Introduction'
import Events from './Homepage Components/Events'
import Testimonials from './Homepage Components/Testimonials'
import Footer from './Footer'
import certificate from '../Assets/certi.jpg'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure,Image } from '@chakra-ui/react'
import { color } from 'framer-motion';
const Homepage = () => {
const navigation=useNavigate();
const[buyColor,setBuyColor]=useState('red');
const { isOpen, onOpen, onClose } = useDisclosure()
function handleNavigationProLoudSpeaker(){
navigation('/proproducts');
}



useEffect(() => {
  const allCookies = Cookies.get();
  console.log('All Cookies:', allCookies);
 
  const intervalId = setInterval(() => {
    setBuyColor((prevColor) => (prevColor === 'red' ? 'black' : 'red'));
    
  }, 900);

  // Clear the interval when the component unmounts
  return () => clearInterval(intervalId);
}, []);

  return (
    <>
    <div className='homepage-bg-top'>
      <NavbarHome/>
     <img src={logonew} className='logo-img'  />
     <div className='navbar-div-homepage-loudspeaker'>
      <button  onClick={handleNavigationProLoudSpeaker}>PRO LOUDSPEAKER</button>
      <button onClick={handleNavigationProLoudSpeaker} >HOME LOUDSPEAKER</button>
      <button >APPLICATION FOR DELEARSHIP</button>
     </div>
     <Box width='max-content' margin='auto' padding='2.5rem'>
      <button className='navbar-div-homepage-loudspeaker-buynow' style={{backgroundColor:buyColor}}  >BUY ONLINE</button>
     </Box>
    </div>
  
    <Text cursor='pointer' onClick={onOpen} fontSize='1.2rem' color='white' fontWeight='350' width='85%' borderRadius='0.4rem' height='max-content' margin='auto' marginTop='2rem'  backgroundColor='rgb(255, 0, 0)' padding='0.7rem'>
    Octune Electronics LLP has received Certificate of Appreciation from Tht Goverement of India (Ministry of Finance)
   </Text>
   <Box  margin='auto'>
   <Modal isOpen={isOpen} height='10rem' onClose={onClose} >
   
        <ModalContent width='80%'  backgroundColor='white'  margin='auto' marginTop='1rem' >
        <ModalCloseButton width='1.5rem' marginLeft='auto' borderRadius='3rem' color='white' backgroundColor='red' borderColor='transparent' />
          <ModalHeader width='max-content' margin='auto'>CERTIFICATE OF APPRECIATION</ModalHeader>
          
          <ModalBody>
           <Image src={certificate} height='100%' width='100%' maxHeight='38rem'/>
          </ModalBody>

          
        </ModalContent>
      </Modal>
   </Box>

   <Box   fontWeight='300' paddingTop='0.7rem' paddingBottom='0.7rem'   color='white'  width='85%'   margin='auto' marginTop='2rem'  backgroundColor='rgba(255, 0, 0,0.6)' >
 <h1 className='pro-spk-h1' >Pro Loudspeaker</h1>
   </Box>
   <ProSPKCarausal/>
   <div className='banner-banner-div'>
    <div><img src={banner1} alt="" /></div>
    <div>
      <h1>Inspire. Innovate. Entertain.</h1>
      <div>
      The horizon where four decades of
       experience meet futuristic ideas.
      </div>
      <div>
      Established in the year 1982. Sweton 
      is one of the pioneer brand of India recognized
       as the market leader in Eastern India.
      </div>
    </div>
    <div><img src={banner2} alt="" /></div>
   </div>
   <Box   fontWeight='300' paddingTop='0.7rem' paddingBottom='0.7rem'   color='white'  width='85%'   margin='auto' marginTop='2rem'  backgroundColor='rgb(2, 183, 255)' >
 <h1 className='pro-spk-h1' >Home Loudspeakers</h1>
   </Box>
   <HmoeSPK/>
   <ComparisionandVideo/>
   <Introduction/>
   <Events/>
   <Testimonials/>
   <div className="mapouter" style={{marginTop:'2rem'}}>
      <div className="gmap_canvas">
        <iframe
        
          title="Google Map"
          width="100%"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Octune+Electronics+LLP%2C+29%2F1+B%2C+Chandni+Chawk+St%2C+Bimla+Chowk+Building%2C+3rd+Floor+%23302%2C+Kolkata%2C+West+Bengal+700072&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          style={{ border: '0' }}
          allowFullScreen
        ></iframe>
        
        <br />
        <a href="https://www.onclock.net/"></a>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Homepage
