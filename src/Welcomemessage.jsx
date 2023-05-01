import React from 'react';
import { useState,useEffect } from 'react';

// function Welcomemessage({myprops}) {
 
    // const { useEffect, useState } = React
    const CounterWithNameAndSideEffect = () => {
     const [count, setCount] = useState(0)
     useEffect(() => {
     console.log(`You clicked ${count} times`)
     })
     return (
     <div>
     <p>You clicked {count} times</p>
     <button onClick={() => setCount(count + 1)}>Click</button>
     </div>
     )
    }
    
    


export default CounterWithNameAndSideEffect