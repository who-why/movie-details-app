import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Movie from './Components/Movie/Movie'
import Tvshow from './Components/Tvshow/Tvshow'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'

import './App.css'
import Details from './Components/Details/Details'
import Search from './Components/Search/Search'

const App = () => {
  return (
    <div className='main'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/movie" element={<Movie/>} />
        <Route path="/tvshow" element={<Tvshow/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/:type/:id" element={<Details />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
