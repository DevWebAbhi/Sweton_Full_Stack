import React from 'react'
import '../../Styles/Introduction.css'
import logonew from '../../Assets/logonew.png'
import proBase from '../../Assets/proBase.jpg'
const Introduction = () => {
  return (
    <div className='main-div-introduction'>
        <h1>Welcome to the world of <img className='logonew-img' src={logonew} alt="" /></h1>
      <div className='parent-introduction-div'>
        <div><img src={proBase} alt="image" /></div>
        <div>
            <h1>
            Among the very few Indian 
            </h1>
            <p>
            SWETON – Among the very few Indian Brands having an in-house product range of more than forty varieties of precision transducers for Professional sound industries. Also, more than forty varieties of transduces for Home Series. Probably, the only manufacturer in 
            India cater to both Pro and Home series.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
