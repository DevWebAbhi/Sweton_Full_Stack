import React from 'react'
import '../Styles/ProSpeakerDetailsPage.css';
import '../Styles/Teststanders.css'
import Footer from './Footer';
import CommonNavbar from './CommonNavbar';
const Teststanders = () => {
  return (
    <div>
        <CommonNavbar headdingName={"Test Standers"}/>
      <div className='pro-series-navigator'>
          <p>HOME</p>
          <p>|</p>
          <p>Test Standers</p>
      </div>
      <div className='teststanders-div'>
        <ol>
            <li>Nominal Power Handling is measured according to the AES2-1984 standard.</li>
            <li>Power on Continuous Program is defined as 3 dB greater than the Nominal Rating.</li>
            <li>Applied RMS Voltage is set to 2.83 V for 8 ohms Nominal Impedance</li>
            <li>Thiele-Small (T/S) parameters are measured after a high level 25 Hz sine wave preconditioning test for 4-8 hours.</li>
            <li>Linear X-max is measured by Mechanical excursion.</li>
            <li>Frequency Response and Impedance Curve are measured using MLS and Sinusoidal feature in auto scaling function of CLIO 12.5 Standard version.</li>
        </ol>
      </div>
      <Footer/>
    </div>
  )
}

export default Teststanders
