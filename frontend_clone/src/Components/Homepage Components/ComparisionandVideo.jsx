import React from 'react'
import {Box} from '@chakra-ui/react'
import '../../Styles/homepagenavbar.css'
import '../../Styles/ComparisionandVideo.css'
const ComparisionandVideo = () => {
  return (
    <div className='main-parent-div'>
        <div className='parent-comparision-div'>
      <div>
      <Box   fontWeight='200' padding='0.3rem'   color='white'     margin='auto' marginBottom='1.5rem'  backgroundColor='#960000' >
 <h1  >Why SWETON Speaker instead of Chinese</h1>
   </Box> 
   <table>

   <thead>
    <tr>
        <th>SWETON</th>
        <th>CHINEASE</th>
    </tr>
   </thead>
    <tbody>
        <tr>
            <td>Consistency in quality. Long Life.</td>
            <td>Consistency doubtful. Limited life.</td>
        </tr>
        <tr>
            <td>Only best quality of raw materials used.</td>
            <td>No guarantee of quality of raw materials.</td>
        </tr>
        <tr>
            <td>Regular supply available.</td>
            <td>No such guarantee of regular supply.</td>
        </tr>
        <tr>
            <td>Normally NO price fluctuation due to change in foreign exchange rate.</td>
            <td>High risk of Price fluctuation due to change in exchange rate of US $.</td>
        </tr>
        <tr>
            <td>RE-Con Kit available.</td>
            <td>Re-Con Kit not available easily.</td>
        </tr>
        <tr>
            <td>Over 38 years of experience in quality manufacturing.</td>
            <td>Very difficult to find such reliable supplier.</td>
        </tr>
        <tr>
            <td>Make in India - Manufactured in Kolkata. Creates Employment and wealth in our own Country.</td>
            <td>Imported from China. NO EMPLOYEMENT Created in India. Employment created in China.</td>
        </tr>
        <tr>
            <td>Make in India - To suit the taste and requirement of Indian market. Performs well under Extreme condition.</td>
            <td>No experience of Indian taste. Not suitable for extreme condition.</td>
        </tr>
        <tr>
            <td>Make in India - Proud of Our Origin. We believe in our Quality.</td>
            <td>Make false claim like - Designed in Italy , U.S. or England.Because they know that their quality is inferior.</td>
        </tr>
        <tr>
            <td>Any customisation in design & quality can be made quickly.</td>
            <td>It takes atleast 3 months to make any changes.</td>
        </tr>
    </tbody>
    </table> 
      </div>
      <div>
      <Box   fontWeight='200' padding='0.3rem'   color='white'     margin='auto' marginBottom='1.5rem'  backgroundColor='#960000' >
 <h1  >Our Videos</h1>
   </Box>

       <div>
       <iframe width="100%" height="200px" src="https://www.youtube.com/embed/-6HZNh0ffDw?si=WzVU7CijWl5kyvTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe width="100%" height="225px" src="https://www.youtube.com/embed/_StQ36hSdrI?si=V4ujA1E87tf3W0G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>   
      </div>
    </div>
    </div>
  )
}

export default ComparisionandVideo
