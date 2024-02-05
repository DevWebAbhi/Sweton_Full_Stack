import React, { useState } from 'react';
import '../Styles/CommonNavbar.css';

import logo1 from '../Assets/logo1.png';

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';

import {useDisclosure } from '@chakra-ui/react';

import { useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import DrawerRight from './Homepage Components/DrawerRight';
import User from './User';
const CommonNavbar = ({headdingName}) => {
  const [open, setOpen] = useState(0);
  const navigate=useNavigate();
  const[isDrawerRight,setDrawerRight]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navDropdownTitleStyle = {
    backgroundColor:'rgb(255, 42, 42)'
  };
 
  function handleNav(e){
    navigate(e);
  }
  return (
    <div>
      <div className='background-div'>
        <img onClick={e=>handleNav('/')} className='CommonNavbar-logo1' src={logo1} alt="" />
        <div className='navbar-items-div'>
        <Navbar className='navbar1'  collapseOnSelect expand="xl">
        <Container>
          
          <Navbar.Toggle className='common-navbar-styling1'  aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='common-navbar-styling2'  id="responsive-navbar-nav">
            <Nav className='navbar-links'>
              <Nav.Link onClick={(e)=>handleNav('/')} className='navbar-links-link1'>HOME</Nav.Link>
              <Nav.Link onClick={(e)=>handleNav('/about')} className='navbar-links-link1'>ABOUT</Nav.Link>
              <NavDropdown title={<span style={{ color: 'white' }}>PRODUCTS</span>}  className='navbar-links-link1'>
                <NavDropdown.Item onClick={(e)=>handleNav('/proproducts')} className='navbarproduct1'>Pro Loudspeaker</NavDropdown.Item>
                <NavDropdown.Item onClick={(e)=>handleNav('/proproducts')} className='navbarproduct1'>Home Loudspeaker</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e)=>handleNav('/events/0')}  className='navbar-links-link1'>EVENT</Nav.Link>
              <Nav.Link  className='navbar-links-link1' onClick={(e)=>handleNav('/videos')}>VIDEOS</Nav.Link>
              <Nav.Link  className='navbar-links-link1'>BLOG</Nav.Link>
              <NavDropdown title={<span style={{ color: 'white' }}>CONTACT</span>} id="navbarScrollingDropdown" className='navbar-links-link1'>
                <NavDropdown.Item className='navbar-links-link1'>Contact Details</NavDropdown.Item>
                <NavDropdown.Item className='navbar-links-link1'>Application For Dealership</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e)=>handleNav('/legaldisclaimer')} className='navbar-links-link1'>LEGAL DISCLAIMER</Nav.Link>
              <Nav.Link onClick={(e)=>handleNav('/teststanders')} className='navbar-links-link1'>TEST STANDARDS</Nav.Link>
              <Nav.Link onClick={onOpen} className='navbar-links-link1'>LOGIN</Nav.Link>
              <Nav.Link  className='navbar-links-link1' onClick={(e) => setDrawerRight(isDrawerRight?false:true)}>CART</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <User isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <DrawerRight isDrawerRight={isDrawerRight} setDrawerRight={setDrawerRight} />
          </div>
          <h1>{headdingName}</h1>
        </div>

        
    </div>
  );
};

export default CommonNavbar;

