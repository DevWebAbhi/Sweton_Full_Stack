import React, { useState } from 'react'
import '../../Styles/TestimonialsCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const TestimonialCard = ({ele}) => {
 

  function handleNav(e){
    window.location.href=`${e}`;
  }

  return (
    <div className='testimonials-card-main-div'>
      <div className='testimonials-card-child-div'>
      <div><img className='testimonials-card-image' src={ele.image} alt="" /></div>
      <div className='testimonialsCard-veritle-line'></div>
     <div>
     
     <h3 >{ele.title}</h3>
      <p>{ele.description}</p>
      {ele.type=='comment'?(<h4 onClick={e=>handleNav(ele.website)}>Read More...</h4>):(<h4 onClick={e=>handleNav(ele.website)}>Visit Website ...</h4>)}
      <div style={{display:'flex'}}>
        <div style={{paddingTop:'0.6rem'}}>
        {
      Array(5).fill(1).map((e,indx)=>(
         <span  > ⭐ </span>
      ))
     }
        </div>
        
        <div>
        
        </div>
      </div>
     
   
     </div>
      </div>
    </div>
  )
}



export default TestimonialCard
