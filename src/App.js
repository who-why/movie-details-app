import React, { useContext } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Popup from './Components/Popup/Popup'
import { MyContext } from './Components/Context/Context'

const App = () => {
    const {open,setopen,todo,settodo,doing,setdoing,done,setdone}=useContext(MyContext);
    const openpopup=()=>{
        setopen(!open);
    }
  return (
    <div>
      <Navbar openpopup={openpopup}/>
      <Hero/>
      {open &&
        <Popup openpopup={openpopup}/>
      }

    </div>
  )
}

export default App
