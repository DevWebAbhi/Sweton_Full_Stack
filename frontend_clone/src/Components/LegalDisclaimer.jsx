import React from 'react'
import '../Styles/ProSpeakerDetailsPage.css';
import '../Styles/Teststanders.css'
import Footer from './Footer';
import CommonNavbar from './CommonNavbar';
const LegalDisclaimer = () => {
  return (
    <div>
       <CommonNavbar headdingName={"Legal Disclaimer"}/>
      <div className='pro-series-navigator'>
          <p>HOME</p>
          <p>|</p>
          <p>Legal Disclaimer</p>
      </div>
      <div className='teststanders-div'>
        <ol>
            <li>Sweton is the registered trade mark of PROLINE INC in India and abroad.</li>
            <li>Design and Specifications are subject to change without notice owing to continuous product upgradation.</li>
            <li>Technical Specifications are subject to product tolerances.</li>
            <li>All rights reserved.</li>
            <li>Any reproduction of images or design is prohibited.</li>
            <li>Unintentional printing error, if any, is regretted.</li>
            <li>Sweton Speakers should only be used in the enclosures as suggested against each product. Sweton Speakers or OCTUNE ELECTRONICS LLP will not be responsible for any damage to speakers if the speakers are used in an enclosure or cabinet not suggested by the Brand or the Firm.</li>
        </ol>
      </div>
      <Footer/>
    </div>
  )
}

export default LegalDisclaimer
