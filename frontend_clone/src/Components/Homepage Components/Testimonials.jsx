import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../Styles/Testimonials.css';
import { Box, Image, h1,Stack, Heading,Skeleton } from '@chakra-ui/react';
const Testimonials = () => {
    const[testimonials,setTestimonials]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    const responsive = {
      superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1 },
          items: 1,
          slidesToSlide: 1
        }
    };

    const getData=async()=>{
        try {
          setLoading(true);
          setError(false);
            const data=await axios.get('https://sweton-clone-backend.onrender.com/testimonials');
            console.log(data);
            setTestimonials(data.data.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true)
        }
    }

    useState(()=>{
        getData();
    })
  return (
    <div className='testimonials-main-div'>
      <h1 className='testimonials-headding-h1'>Testimonials</h1>

      {
        !error?(
          
            loading?(
              <Box marginTop='2rem' >
                  <Skeleton widthRandomness='0' width='100%' height='3rem' />
                  <Skeleton widthRandomness='0' width='100%' height='3rem' />
                  <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                  <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                  <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                  <Skeleton widthRandomness='0' width='100%' height='3rem' />
                  <Skeleton widthRandomness='0' width='100%' height='3rem' />
                </Box>
            ):(
              <Carousel
        
  
  
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
         keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customDot={<CustomDot data={testimonials} />}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
               {testimonials.map((ele,idx)=>{
        return <TestimonialCard key={idx} ele={ele} count={Number(5-ele.ratings)}/> 
      })} 
      </Carousel>
            )
          
        ):(
          <Box height='100%' marginTop='2rem'  >
          <h1 >Network Error</h1>
         </Box>
        )
      }
     
    </div>
  )
}

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    data,
    carouselState: { currentSlide, deviceType }
  } = rest;
  const carouselItems = []
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      id='dot-button'
      
      className={active ? "active" : "inactive" } 
      onClick={() => onClick()}
    >
      {React.Children.toArray(carouselItems)[index]}
    </button>
  );
};


export default Testimonials
