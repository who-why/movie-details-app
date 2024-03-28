import React from 'react'
import './Hero.css'

const Colum = ({todo,settodo}) => {
  return (
    <div className='colum'>
      


        {/* cards */}

        {todo.map((todo, index) => (
           <div className="task-card" key={index}>
              <h3>{todo.name}</h3>
              <p>{todo.description}</p>
          </div>
         ))}

    </div>
  )
}

export default Colum
