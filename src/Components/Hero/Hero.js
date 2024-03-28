
import React, { useContext } from 'react'
import './Hero.css'
import Colum from './Colum'
import { MyContext } from '../Context/Context'
import Colum2 from './Colum2'
import Colum3 from './Colum3'

const Hero = () => {
  
  const {todo,settodo,doing,setdoing,done,setdone}=useContext(MyContext)
  
  
   return (
    <div className='hero'>

       <div className="todo">
           <div className='top'>
              <div className="color"></div>
               <p>Remaining ({todo.length})</p>
           </div>
         <Colum todo={todo} settodo={settodo}/>
       </div>


       <div className='todo'>
           <div className='top'>
              <div className="color1"></div>
               <p>Doing ({doing.length})</p>
           </div>
           <Colum2 doing={doing} setdoing={setdoing}/>
       </div>


        <div className='todo'>
          <div className='top'>
              <div className="color2"></div>
               <p>Done ({done.length})</p>
           </div>
          <Colum3 done={done} setdone={setdone}/>
        </div>
        
    </div>
  )
}

export default Hero