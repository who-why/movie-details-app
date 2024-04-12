import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    const storedRoute = localStorage.getItem('activeRoute');
    if (storedRoute) {
      setActiveRoute(storedRoute);
    }
  }, []);

  const handleRouteClick = (route) => {
    setActiveRoute(route);
    localStorage.setItem('activeRoute', route);
  };
  setTimeout(() => {
      handleRouteClick();
  },800);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className='nav'>
      <Link to='/'>
          <img src={logo} alt="logo" />
      </Link>
      <div className='route'>
        <Link to='/'>
          <a
            className={activeRoute === 'Home' ? 'active' : ''}
            onClick={() => handleRouteClick('Home')}
          >
            Home
          </a>
        </Link>
        <Link to='/movie'>
          <a
            className={activeRoute === 'Movie' ? 'active' : ''}
            onClick={() => handleRouteClick('Movie')}
          >
            Movie
          </a>
        </Link>
        <Link to='/tvshow'>
          <a
            className={activeRoute === 'Tv Show' ? 'active' : ''}
            onClick={() => handleRouteClick('Tv Show')}
          >
            Tv Show
          </a>
        </Link>
        <Link to='/search'>
          <a>
            <FaSearch />
          </a>
        </Link>
      </div>
        
    </div>
  );
};

export default Navbar;  