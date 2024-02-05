import React, { useEffect, useState } from 'react'
import '../Styles/Videos.css'
import { getVideos } from '../Redux/VideosReducer/action';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Heading,Skeleton } from '@chakra-ui/react';
import CommonNavbar from './CommonNavbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Videos = () => {

const[loading,setLoading]=useState(false);
const[error,setError]=useState(false);
const dispatch=useDispatch();
const selector=useSelector(state=>state.videoReducer);
const navigate=useNavigate();
    const getData=()=>{
        dispatch(getVideos(setLoading,setError));
    }
    
    function handleNav(e){
        navigate(e);
       }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <CommonNavbar headdingName={"Our Videos"} />
        <div className='pro-series-navigator'>
          <p onClick={e=>handleNav('/')}>HOME</p>
          <p>|</p>
          <p >Our Videos</p>
          <p>|</p>
         
         
        </div>
        <Heading textAlign={'center'} marginTop={'2rem'}  fontSize={'3rem'} color={'#3498DB'} textDecoration={'underline'}>Our Videos</Heading>
        {
            !error?(
                !loading?(
                    <div className='videos-div-grid'>
                        {
                            selector.videos.length!=0?(
                                selector.videos.map((ele,idx)=>{
                                    return <div key={idx} className='videos-div-single'>
                                        <iframe width="200" height="150" src={ele.link} allowfullscreen></iframe>
                                    </div>
                                })
                            ):""
                        }
                    </div>
                ):(
                <Box marginTop='2rem' >
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0'  width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
                <Skeleton widthRandomness='0' width='100%' height='3rem' />
              </Box>
                )
            ):(
                <Heading textAlign={'center'} marginTop={'2rem'}>Network Error</Heading>
            )
        }
      <Footer/>
    </div>
  )
}

export default Videos
