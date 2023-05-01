import React from 'react'
import { useState,useEffect } from 'react';


function Useeffect() {
    const[count,setCount]=useState(0);
    useEffect(()=>console.log('clicked'),[count])

  return (
    <div>
        <h1>Useeffect</h1>
        <p> you clicked{count} times</p>
        <button onClick={()=>setCount(count+1)}> Click me</button>
    </div>
  )
}

export default Useeffect