import React, { useState ,useEffect} from 'react'
import CommonNavbar from './CommonNavbar'
import Footer from './Footer'
import { setEvents } from '../Redux/EventReducer/action'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useDisclosure,Skeleton } from '@chakra-ui/react';
import '../Styles/EventsPage.css'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Box,Button,Image,Text,Heading,useMediaQuery } from '@chakra-ui/react';
const EventsPage = () => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const selector=useSelector(state=>state.eventReducer);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {id}=useParams();
    const[imgAdress,setImgAdress]=useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isSmallerThan400] = useMediaQuery('(max-width: 400px)')
    async function getData(){
        try {   
            dispatch(setEvents(setError,setLoading));
        } catch (error) {
            console.log(error)
        }
    }
 
    function handleSetImageAdress(e){
        e.preventDefault();
        setImgAdress(e.target.src);
        onOpen();
        
    }

    function handleNav(e){
        navigate(e);
       }
       function handleEventSeter(e){
        navigate('/events'+`/${e}`);
       }
    useEffect(()=>{
        getData();
        
    },[])

  

  return (
    <div>
      <CommonNavbar headdingName={"Events"}/>
      <div className='pro-series-navigator'>
          <p onClick={e=>handleNav('/')}>HOME</p>
          <p>|</p>
          <p >Events</p>
          <p>|</p>
         
         
        </div>
        <Heading textAlign={'center'} marginTop={'2rem'} fontSize={'xl'} color={'cyan'}>Our Events</Heading>
      {
        !error?(
            !loading?(
                <div className='events-page-main-div'>
                    
        <div>
        <h1 className='events-page-main-div-h1'>{selector.events.length!=0?(selector.events[id].title):""}{selector.events.length!=0?(selector.events[id].about):""}</h1>
        <Heading textAlign={'left'} fontSize={'large'}  color={'cyan'}>{selector.events.length!=0?(selector.events[id].year):""}</Heading>
           <div>
           <div>
                <img src={selector.events.length!=0?(selector.events[id].image[0]):""} alt="" />
            </div>
            <div>
                {
                  selector.events.length!=0?(
                    selector.events[id].image.map((eimg,idximg)=>{
                        return<img key={idximg} src={eimg} onClick={ e=>handleSetImageAdress(e) }></img>
                    })
                  ):""
                }
            </div>
           </div>
        </div>
        <div className='our-events-main-div'>
            <h1>Our Events</h1>
            {
                selector.events.length!=0?(
                    selector.events.map((itm,idxitm)=>(
                        <Box key={idxitm} padding={'0.5rem 1rem'} marginBottom={'1rem'} >
                            <Box display={!isSmallerThan400?'flex':'block'} marginBottom={'1rem'}>
                            <div>
                                <Image padding={'0.5rem'} width='10rem' src={itm.image[0]} alt="" />
                            </div>
                            <div>
                                <Text textAlign={!isSmallerThan400?'left':'center'} margin={'auto'} color={'#797D7F'} maxH={'4.8rem'} overflow={'hidden'}>{itm.about}</Text>
                            </div>
                            </Box>
                            <div>
                                <Button backgroundColor={'transparent'} border={'1px solid red'}  _hover={{ color: 'teal',border:'2px solid teal' }} onClick={e=>handleEventSeter(idxitm)}>More</Button>
                            </div>
                        </Box>
                    ))
                ):("")
            }
        </div>
      </div>
            ):(
                <Box marginTop='2rem' >
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
              </Box>
            )
        ):(
            <Heading textAlign={'center'}>Network Error</Heading>

        )
      }
      <Footer/>
      <ShowImage onOpen={onOpen} onClose={onClose} isOpen={isOpen} imgAdress={imgAdress}/>
      
    </div>
  )
}


export default EventsPage

function ShowImage({ isOpen, onOpen, onClose,imgAdress }) {
    const finalRef = React.useRef(null)
  
    return (
      <>
  
   
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent width={'80%'} margin={'auto'} marginTop={'2rem'}>
            <ModalCloseButton width={'min-content'} marginLeft={'auto'} backgroundColor={'transparent'}/>
            <ModalBody>
              <Image width={'100%'} maxH={'35rem'} src={imgAdress}/>
            </ModalBody>
  
           
          </ModalContent>
        </Modal>
      </>
    )
  }
