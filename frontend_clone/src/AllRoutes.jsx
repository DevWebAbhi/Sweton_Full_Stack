import React from 'react'

import {Route,Routes} from 'react-router-dom'
import Homepage from './Components/Homepage'
import Dashboard from './Admin/Dashboard';
import ProProducts from './Components/ProProducts';
import ProSpeakerDetailsPage from './Components/ProSpeakerDetailsPage';
import ProProductSeries from './Components/ProProductSeries';
import Teststanders from './Components/Teststanders';
import LegalDisclaimer from './Components/LegalDisclaimer';
import About from './Components/About';
import Checkout from './Components/Checkout';
import EventsPage from './Components/EventsPage';
import Videos from './Components/Videos';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/admin' element={<Dashboard/>}/>
        <Route path='/proproducts' element={<ProProducts/>}/>
        <Route path='/proproducts/proLoudSpeakerDetail' element={<ProSpeakerDetailsPage/>}/>
        <Route path='/proproducts/series' element={<ProProductSeries/>}/>
        <Route path='/teststanders' element={<Teststanders/>}/>
        <Route path='/legaldisclaimer' element={<LegalDisclaimer/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/events/:id' element={<EventsPage/>}/>
        <Route path='/videos' element={<Videos/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
