import React from 'react';
import { useRef } from 'react';

function Useref() {
    const count = useRef(0);
    const CheckValue=()=>{
        count.current++;
        console.log("countvalue:"+count.current)
    }
  return ( 
    <div>
        <h1>{count.current}</h1>
        <button onClick={CheckValue}>CheckValue</button>
    </div>
  )
}

export default Useref