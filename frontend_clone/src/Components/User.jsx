import React, { useState, useRef, useEffect } from 'react';
import '../Styles/CommonNavbar.css';
import Cookies from 'js-cookie';

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';

import { Box, Button, FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import axios from 'axios';
import { useMediaQuery } from '@chakra-ui/react';
import { SET_LOGIN } from '../Redux/User/actionType';

const REACT_APP_URL = process.env.REACT_APP_URL;

function User({ isOpen, onOpen, onClose }) {
  const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
  const [isSmallerThan550] = useMediaQuery("(max-width: 550px)");
  const [isSmallerThan400] = useMediaQuery("(max-width: 400px)");

  const modalWidth = isSmallerThan400 ? '85%' : (isSmallerThan550 ? '75%' : (isSmallerThan850 ? '65%' : (isSmallerThan1000 ? '50%' : '30%')));

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [login, setLogin] = useState(false);
  const selector=useSelector(store=>store.userReducer.login);
  const dispatch=useDispatch();
  
  async function authenticateWithGoogle() {
    try {
      const googleAuthURL = `https://sweton-clone-backend.onrender.com/auth/google`;
      const googleLoginWindow = window.open(googleAuthURL, '_blank', 'width=600,height=600');

      if (!googleLoginWindow) {
        console.error('Google login window blocked or closed.');
        return;
      }
     setTimeout(()=>{
      googleLoginWindow.close();
      
     setTimeout(()=>{
      window.location.reload();
     },1500)
    
     },3000)

    } catch (error) {
      console.error('Error during authentication:', error);
    }
  }

    function handleLogOut(){
      const allCookies = Cookies.get();
      
      if(allCookies['sweton-token-authentication-user']){
        Cookies.remove('sweton-token-authentication-user');
        onClose();
        localStorage.setItem('seeton-web-cart',JSON.stringify([]));
        window.location.reload();
      }
      
    }

  useEffect(() => {
    const allCookies = Cookies.get();
   
    if(allCookies['sweton-token-authentication-user']){
      dispatch({type:SET_LOGIN,payload:""});
    }
    
  }, []);

  return (
    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent border={'4px solid rgb(207, 3, 3)'} margin={'auto'} marginTop={'8rem'} w={modalWidth} height={'28rem'} backgroundColor='white' borderRadius='8px' p={4}>
        <ModalHeader textAlign="center" color={'rgb(6, 78, 212)'} fontSize="1.5rem" fontWeight="bold">
          {selector?"Already Loggedin":login ? 'Login' : 'Signup'}
        </ModalHeader>
        <ModalCloseButton position={'relative'} top={'-1.8rem'} right={'0.2rem'} padding={'0.3rem 0.5rem'} width={'min-content'} marginLeft={'auto'} backgroundColor={'#48C9B0'} border={'none'} color={'white'} />
        {!selector?<>
        
          
        <ModalBody pb={6} padding={'1.5rem'}>
          {login ? (
            <>
              <FormControl mb={10}>
                <FormLabel margin={'auto'} width={'100%'}>Email</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter your Email"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.300"
                  margin={'auto'}
                  width={'100%'}
                />
              </FormControl>

              <FormControl mb={10}>
                <FormLabel margin={'auto'} width={'100%'}>Password</FormLabel>
                <Input
                  placeholder="Enter your Password"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.300"
                  margin={'auto'}
                  width={'100%'}
                />
              </FormControl>
            </>
          ) : (
            <>
              <FormControl mb={10}>
                <FormLabel margin={'auto'} width={'100%'}>Full Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Enter your Full Name"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.300"
                  margin={'auto'}
                  width={'100%'}
                />
              </FormControl>

              <FormControl mb={10}>
                <FormLabel margin={'auto'} width={'100%'}>Email</FormLabel>
                <Input
                  placeholder="Enter your Email"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.300"
                  margin={'auto'}
                  width={'100%'}
                />
              </FormControl>
              <FormControl mb={10}>
                <FormLabel margin={'auto'} width={'100%'}>Password</FormLabel>
                <Input
                  placeholder="Enter your Password"
                  borderRadius="md"
                  border="1px solid"
                  borderColor="gray.300"
                  margin={'auto'}
                  width={'100%'}
                  type='password'
                />
              </FormControl>
            </>
          )}
        </ModalBody>
        {login ? (
          <>
            <ModalFooter width={'max-content'} margin={'auto'}>
              <Button
                width="7rem"
                colorScheme="blue"
                mr={3}

                backgroundColor={'#48C9B0'}
                color={'white'}
                border={'transparent'}
                padding={'0.1rem'}
                borderRadius={'0.3rem'}
                fontSize={'larger'}
                fontWeight={'200'}
              >
                Login
              </Button>
            </ModalFooter>
            <ModalFooter width={'max-content'} margin={'auto'}>
              New user ?
              <Button
                width="7rem"
                colorScheme="blue"
                mr={3}
                onClick={e => setLogin(false)}
                backgroundColor={'transparent'}
                color={'#48C9B0'}
                border={'transparent'}
                padding={'0.1rem'}
                borderRadius={'0.3rem'}
                fontSize={'larger'}
                fontWeight={'200'}
              >
                Signup
              </Button>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalFooter width={'max-content'} margin={'auto'}>
              <Button
                width="7rem"
                colorScheme="blue"
                mr={3}

                backgroundColor={'#48C9B0'}
                color={'white'}
                border={'transparent'}
                padding={'0.1rem'}
                borderRadius={'0.3rem'}
                fontSize={'larger'}
                fontWeight={'200'}
              >
                Signup
              </Button>
            </ModalFooter>
            <ModalFooter width={'max-content'} margin={'auto'}>
              Already a user ?
              <Button
                width="7rem"
                colorScheme="blue"
                mr={3}
                onClick={e => setLogin(true)}
                backgroundColor={'transparent'}
                color={'#48C9B0'}
                border={'transparent'}
                padding={'0.1rem'}
                borderRadius={'0.3rem'}
                fontSize={'larger'}
                fontWeight={'200'}
              >
                Login
              </Button>
            </ModalFooter>
          </>
        )}
        <ModalFooter width={'max-content'} margin={'auto'}>
          <Button
            width="max-content"
            colorScheme="blue"
            mr={3}
            backgroundColor={'#48C9B0'}
            color={'white'}
            border={'transparent'}
            padding={'0.1rem'}
            borderRadius={'0.3rem'}
            fontSize={'larger'}
            fontWeight={'200'}
            onClick={authenticateWithGoogle}
          >
            Login With Google
          </Button>
        </ModalFooter>
        
        </>:<>
        <ModalBody pb={6} padding={'1.5rem'} width={'max-content'} margin={'auto'}>
          <Button
           width="max-content"
           colorScheme="blue"
           mr={3}
           backgroundColor={'#48C9B0'}
           color={'white'}
           border={'transparent'}
           padding={'0.1rem'}
           borderRadius={'0.3rem'}
           fontSize={'larger'}
           fontWeight={'200'}
           onClick={handleLogOut}
          >Logout</Button>
        </ModalBody>
        </>}
      </ModalContent>
    </Modal>
  );
}

export default User;