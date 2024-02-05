import React, { useEffect, useState } from "react";
import { useDisclosure,Input,Button ,Box} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
   
  } from '@chakra-ui/react';
 
  import { useMediaQuery } from '@chakra-ui/react';
import CartCard from "./CartCard";
function DrawerRight({isDrawerRight,setDrawerRight}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
    const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
    const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");
    const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");
  
    const modalWidth = isSmallerThan400?'85%':(isSmallerThan550?'75%':(isSmallerThan850?'65%':(isSmallerThan1000?'50%':'30%')));
   const[error,setError]=useState(false);
   const[loading,SetLoading]=useState(false);
   const [data,setData]=useState([]);
   
   async function handleCart(){
    

    try {
      SetLoading(true);
      setError(false);
      const allCookies = Cookies.get();
      if (allCookies['sweton-token-authentication-user']) {
        const headers = {
          'Authorization': allCookies['sweton-token-authentication-user']
        };
        
        const post = await axios.post(`${process.env.REACT_APP_URL}cart/post`, {id:'get'}, { headers });
       console.log(post)
        if(post.data.data.msg=='not authorized'){
         console.log('not authorized');
         SetLoading(false);
         setError(true);
        }else{
          console.log(post.data.data)
          setData(post.data.data);
         SetLoading(false);
        }
      }
      console.log('handleCart')
    } catch (error) {
     setError(true);
      console.log(error)
    }
  }

    useEffect(()=>{
    if(!isOpen){
        onClose();
        setDrawerRight(false);
       }
   if(isDrawerRight){
    onOpen();
   }
   


   },[isDrawerRight,isOpen])
   useEffect(()=>{
    let cartData=JSON.parse(localStorage.getItem("seeton-web-cart"));
    console.log(cartData)
    setData(cartData);
   },[])
    return (
      <>
        
        
     <Box width={'100%'} height={'100%'} onClick={onClose}>
     <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={'white'}  maxW={modalWidth}   padding={'0.5rem'} borderLeft={'4px solid rgba(207,3,3)'}>
         
          <DrawerHeader fontSize='1.5rem' textAlign={'center'} >Cart Items</DrawerHeader>

          <DrawerBody overflow={'scroll'} height={'80vh'}>
          

          {
          !error?!loading?data!=null && data!=undefined?data.map(()=>(
            <CartCard/>
           )):'No items in cart':'...Loading...':'...Error...'
        }

          </DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
     </Box>
      </>
    )
  }

  export default DrawerRight;