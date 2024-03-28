import React from 'react'
import './Navbar.css'


const Navbar = ({openpopup}) => {
  return (
    <div className='nav'>
        <div className="title">
           <h1><span>Z</span>enlist</h1>
        </div>
        <div className='add-task'>
            <button onClick={openpopup}>+ Add Task</button>
        </div>
    </div>
  )
}

export default Navbar
