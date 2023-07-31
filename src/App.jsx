import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

import StopList from './components/StopList';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css'


function App() {

  const [stops, setStops] = useState([])


  // https://myttc.ca/finch_station.json
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://myttc.ca/finch_station.json')
      const data =  await response.json()
      setStops(data.stops)
      // console.log(data);
    }
    fetchData()
  }, [])


  return (
    <div id='home' className="App">
      
      <BrowserRouter>

        <NavBar stops={stops} />
        {/* <Header /> */}
        
        {/* <Services /> */}
        {/* <StopList stops={stops} /> */}
        {/* <Contact /> */}
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
