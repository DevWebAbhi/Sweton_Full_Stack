import React from 'react'
import '../Styles/Footer.css';
import { Box,Text,Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import facebook from '../Assets/facebook.png';
import instagram from '../Assets/instagram.png';
import youtube from '../Assets/youtube.png';
import pdf from '../Assets/pdf.png';
import certificationLogo from '../Assets/certificationLogo.png'
import all from '../Assets/all.png';
import cc from '../Assets/cc.png'
const Footer = () => {
  return (
    <div className='footer-main-div'>
      <div className='footer-child-div'>
        <div className='footer-child-flex1-div'>
            <div>
                <h1 >Contact <span>Us</span></h1>
                <p>8, Madan Street,</p>
                <p>East India Building, 1st Floor,</p>
                <p>Near E-Mall,</p>
                <p>Kolkata - 700072, West Bengal</p>
                <p > sales@swetonspeakers.com</p>
                <p><span>✆</span> +91 7044411800</p>
                <Box display='flex'>
                    <Box padding='0.5rem' border='solid white' borderWidth='thin' margin='0.2rem'><Image width='1.5rem' borderRadius='0.3rem' backgroundColor='white' src={facebook}/></Box>
                    <Box padding='0.5rem' border='solid white' borderWidth='thin' margin='0.2rem'><Image width='1.5rem' borderRadius='0.5rem' backgroundColor='white' src={instagram}/></Box>
                    <Box padding='0.5rem' border='solid white' borderWidth='thin' margin='0.2rem'><Image width='1.5rem' borderRadius='0.7rem' backgroundColor='white' src={youtube}/></Box>
                </Box>
            </div>
            <div>
                <h1>Our <span>Links</span></h1>
                <p>Home</p>
                <p>About</p>
                <p>Pro Loudspeakers</p>
                <p>Home Loudspeakers</p>
                <p>Events</p>
                <p>Contact Us</p>
                <p>Product Enquiry</p>
                <p>Privacy Policy</p>
                <p>Cancellation Policy</p>
                <p>Disclaimer</p>
                <p>Refund Policy</p>
                <p>Shipping Policy</p>
                <p>Terms & Conditions</p>
                <h1></h1>
                <h1>Download </h1>
                <h2><span className='footer-brochure-span-name'>Brochure</span></h2>
                <Box color='white' padding='0.5rem' marginBottom='2rem' border='1px solid white' width='60%'><Image marginRight='0.5rem' width='1.5rem' src={pdf}/>Home Series</Box>
                <Box color='white' padding='0.5rem' border='1px solid white' width='60%'><Image width='1.5rem' marginRight='0.5rem' src={pdf}/>Pro Series</Box>
            </div>
        </div>
        <div className='footer-child-flex2-div'>
            <div>
            <h1 >Octune Electronics <span>LLP</span></h1>
            <h2>ISO 9001</h2>
            <Box marginTop='2rem' marginBottom='2rem'><Image src={certificationLogo} /></Box>
            <Box><h1>Member <span>Of</span></h1></Box>
            <Box marginLeft='0.5rem'>
              <Box>
                <Image width='3rem' src={all}/>
              </Box>
              <Box color='gray' marginBottom='2rem'>All India Electronics Association</Box>
              <Box>
              <Image width='3rem' src={cc} />
              </Box>
              <Box color='gray' >Indian Chamber of Commerce</Box>
            </Box>
            </div>
            <div>
                <h1>Recent <span>Tags</span></h1>
               <button>Speakers</button>
               <button>Loudspeakers</button>
               <button>PA Speakers</button>
               <button>IT Series</button>
               <button>PT Speaker</button>
               <button>SBS Speaker</button>
               <button>HF Speaker</button>
               <button>Woofer</button>
               <button>Subwoofer</button>
               <button>Tweeter High Frequency (H F)</button>
               <button>Full Range Speaker</button>
               <button>Car Speaker</button>
               <button>Speaker Manufacturer in India</button>
               <button>Audio Speaker Manufacturer</button>
               <button>Audio Speaker Exporter in India</button>
               <button>Raw Speaker in India</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
