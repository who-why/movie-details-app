import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Movie from './components/Movie/Movie'
import Tvshow from './components/Tvshow/Tvshow'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'

import './App.css'
import Details from './components/Details/Details'
import Search from './components/Search/Search'

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
