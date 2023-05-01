import React from 'react';
import { useState } from 'react';
// usestate 
function Usestate() {
    // const [count, setCount] = useState(0);
    const [name,setName]=useState('skillhub');
    return (    
        
      <div>
         <h1>Usestate</h1>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}
      <p>{name}</p>
      <button onClick={()=>setName('teluguskillhib')}>
        change
      </button>

    </div>
    )
}

export default Usestate

