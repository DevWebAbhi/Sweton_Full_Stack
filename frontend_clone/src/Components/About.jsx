import React from 'react'
import CommonNavbar from './CommonNavbar';
import '../Styles/About.css'
import Footer from './Footer';
import logo1 from '../Assets/logo1.png';
import proBase from '../Assets/proBase.jpg';
const About = () => {
  return (
    <div>
      <CommonNavbar headdingName={"About"}/>
      <div>
        <div className='about-content-div'>
            <div>
                <img src={proBase} alt="" />
            </div>
            <div>
                <h1>Welcome to the world of</h1>
                <img src={logo1} alt="" />
                <p>Established in the year 1982. Sweton is one of the pioneer brands of India recognized as the market leader in Eastern India.</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
