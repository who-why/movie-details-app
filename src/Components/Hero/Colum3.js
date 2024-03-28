import React from 'react'
import './Hero.css'

const Colum3 = ({done,setdone}) => {
  return (
    <div className='colum'>

        {/* cards */}

        {done.map((todo, index) => (
           <div className="task-card" key={index}>
              <h3>{todo.name}</h3>
              <p>{todo.description}</p>
          </div>
         ))}

    </div>
  )
}

export default Colum3
