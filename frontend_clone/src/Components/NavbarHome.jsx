import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { useDisclosure } from '@chakra-ui/react';

import Cart from './User';
import { useNavigate } from 'react-router-dom';
import '../Styles/navbar.css';
import DrawerRight from './Homepage Components/DrawerRight';

function NavbarHome() {
  const navDropdownTitleStyle = {
    backgroundColor: 'rgb(207, 3, 3)',
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const[isDrawerRight,setDrawerRight]=useState(false);
  const navigate = useNavigate();

  function handleNav(e) {
    navigate(e);
  }

  return (
    <div className='navbar-div-homepage'>
      <Navbar className='navbar' style={navDropdownTitleStyle} collapseOnSelect expand='xl'>
        <Container>
          <Navbar.Brand className='navbar-container-brand' >
            <h1>OCTUNE ELECTRONICS LLP</h1>
            <h1>ISO&nbsp;9001:2015&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LIC.2018-50459</h1>
          </Navbar.Brand>
          <Navbar.Toggle style={navDropdownTitleStyle} aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse style={navDropdownTitleStyle} id='responsive-navbar-nav'>
            <Nav className='navbar-links'>
              <Nav.Link  className='navbar-links-link'>HOME</Nav.Link>
              <Nav.Link onClick={(e) => handleNav('/about')} className='navbar-links-link'>ABOUT</Nav.Link>
              <NavDropdown title={<span style={{ color: 'white' }}>PRODUCTS</span>} style={navDropdownTitleStyle} className='navbar-links-link'>
                <NavDropdown.Item onClick={(e) => handleNav('/proproducts')} className='navbarproduct'>Pro Loudspeaker</NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => handleNav('/proproducts')} className='navbarproduct'>Home Loudspeaker</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e)=>handleNav('/events/0')} className='navbar-links-link'>EVENT</Nav.Link>
              <Nav.Link  className='navbar-links-link' onClick={(e)=>handleNav('/videos')}>VIDEOS</Nav.Link>
              <Nav.Link  className='navbar-links-link'>BLOG</Nav.Link>
              <NavDropdown title={<span style={{ color: 'white' }}>CONTACT</span>} id="navbarScrollingDropdown" className='navbar-links-link'>
                <NavDropdown.Item href="#action/3.1">Contact Details</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Application For Dealership</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={(e) => handleNav('/teststanders')} className='navbar-links-link'>LEGAL DISCLAIMER</Nav.Link>
              <Nav.Link onClick={(e) => handleNav('/legaldisclaimer')} className='navbar-links-link'>TEST STANDARDS</Nav.Link>
              <Nav.Link onClick={onOpen} className='navbar-links-link' >LOGIN</Nav.Link>
              <Nav.Link className='navbar-links-link' onClick={(e) => setDrawerRight(isDrawerRight?false:true)}>CART</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <DrawerRight isDrawerRight={isDrawerRight} setDrawerRight={setDrawerRight} />
    </div>
  );
}

export default NavbarHome;




