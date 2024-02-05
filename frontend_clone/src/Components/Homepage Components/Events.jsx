import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import '../../Styles/Events.css';
import '../../Styles/Testimonials.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCard from './EventCard';
import '../../Styles/proLoudSPK.css';
import { Box, Image, h1,Stack,Skeleton } from '@chakra-ui/react';
const Events = () => {
    const[event,setEvent]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1800 },
            items: 7,
            slidesToSlide: 7
          },
        desktop: {
          breakpoint: { max: 1800, min: 1620 },
          items: 6,
          slidesToSlide: 6 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1620, min: 1310 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 1310, min: 1045 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        }
        ,smallmobile:{
          breakpoint: { max: 1045, min: 790 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        }
        ,smallsmallmobile:{
          breakpoint: { max: 790, min: 535 },
          items: 2,
          slidesToSlide: 2
        }
        ,smallsmallsmallmobile:{
          breakpoint: { max: 535, min: 1 },
          items: 1,
          slidesToSlide: 1
        }
      };


      async function getData(){
        try {
          setLoading(true);
          setError(false);
            const data= await axios.get('https://sweton-clone-backend.onrender.com/events');
            console.log(data);
            setEvent(data.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error)
            setLoading(false);
        setError(true);
        }
      }

      useEffect(()=>{
       getData();
      },[])


      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group"> 
            <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} >{'<'}</button>
            <button onClick={() => next()} >{'>'}</button>
            
          </div>
        );
      };

  return (
    <div className='events-main-div'>
       
      <div className='events-div'>
      <h1 className='testimonials-headding-h1'>Events</h1>
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
        customDot={<CustomDot data={event} />}
        arrows={false} customButtonGroup={<ButtonGroup />}
        infinite={true}
        autoPlay={true}
      >
                {event.map((state, idx) => (
                  <EventCard key={idx} state={state} idx={idx} />
                ))}
      </Carousel>
          )
        ):(
          <Box height='100%' marginTop='2rem'  >
            <h1 >Network Error</h1>
           </Box>
        )
      }
    </div>
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

export default Events
