import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import PracticeArea from './pages/PracticeArea'
import People from './pages/People'
import CaseStudies from './pages/CaseStudies'
import News from './pages/News'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import NotFound from './pages/NotFound'

import NavBar from './components/NavBar';
import Footer from './components/Footer';



function App() {

  // const [stops, setStops] = useState([])


  // https://myttc.ca/finch_station.json

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://myttc.ca/finch_station.json')
  //     const data =  await response.json()
  //     setStops(data.stops)
  //     // console.log(data);
  //   }
  //   fetchData()
  // }, [])


  return (
    <div id='home' className="App">
      
      <BrowserRouter>

        <NavBar />
        {/* <Header /> */}
        
        {/* <Services /> */}
        {/* <StopList stops={stops} /> */}
        {/* <Contact /> */}
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/practice-area' element={<PracticeArea />} />
          <Route path='/people' element={<People />} />
          <Route path='/case-studies' element={<CaseStudies />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
