
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [open,setopen]=useState(false);
    const [todo,settodo]=useState([])
    const [doing,setdoing]=useState([])
    const [done,setdone]=useState([])


  return (
    <MyContext.Provider value={{open,setopen,doing,setdoing,done,setdone,todo,settodo}}>
      {children}
    </MyContext.Provider>
  );
};