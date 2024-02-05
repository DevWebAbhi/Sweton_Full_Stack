import React, { useEffect, useState, useRef } from 'react';
import pro from '../../Assets/pro.jpg';
import ProductCard from './ProductCard';
import { Box, Image, h1,Stack, Heading,Skeleton } from '@chakra-ui/react';
import axios from 'axios';
import '../../Styles/proLoudSPK.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProSPKCarausal = () => {
    const [Data, setData] = useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1900 },
            items: 4,
            slidesToSlide: 4
          },
        desktop: {
          breakpoint: { max: 1900, min: 1290 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1290, min: 530 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 530, min: 1 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  
    async function getDataProSPK() {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get("https://sweton-clone-backend.onrender.com/proSPKSeries");
      setData(data.data.data);
       
        console.log(data)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
  
    useEffect(() => {
      getDataProSPK();
      console.log(Data)
    }, []);
  

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
    <div className='parent-div'>
      <div className='parent-child-div'>
        <img className='parent-child-img' src={pro} alt="" />
      </div>
      <div className='parent-child2-div'>
        <h1 className='parent-child2-h1'>Product</h1>
       
        <div className='parent-child2-child-div' >
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
    customDot={<CustomDot data={Data} />}
    arrows={false} customButtonGroup={<ButtonGroup />}
    
  >
            {Data.map((state, idx) => (
              <ProductCard key={idx} state={state} />
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

export default ProSPKCarausal


