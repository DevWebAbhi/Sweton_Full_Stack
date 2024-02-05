import { Box,Button,Text,Image } from '@chakra-ui/react'
import '../../Styles/EventCard.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const EventCard = ({state,idx}) => {
  const[color,setColor]=useState('green');
  const navigate=useNavigate();


  useEffect(()=>{
    if((idx+1)%3==0){
      setColor('red');
    }else if((idx+1)%2==0){
      setColor('blue');
      console.log(color+" "+idx+" "+'b')
    }else{
      setColor('green');
      console.log(color+" "+idx+' '+'g')
    }
    console.log(color+" "+idx)
  },[])



  return (
    <div>
       <Box padding='0.3rem' height='30.5rem'   paddingTop='0.3rem' fontSize='medium' textAlign='start'  maxWidth='max-content' marginTop='2rem' >
        <Box padding='0.2rem'  backgroundColor={color} ></Box>
        <div className='event-img-div' ><img className='event-img' src={state.image[0]?state.image[0]:''} /></div>
        
        <Box padding='0.2rem'  backgroundColor={color} fontSize='larger' fontWeight={300} textAlign='center' color='white'>{state.title}</Box>
        <div className='event-about-div' >
        <p>{state.about}</p>
        </div>
        
        <button className='Raed-More-button' onClick={e=>navigate(`/events/${idx}`)} >Read More</button>
        
      </Box>
    </div>
  )
}

export default EventCard
