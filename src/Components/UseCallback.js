import React, { useCallback ,useState} from 'react'
import Title from './Title';
import Button from './Button';
import Count from './Count';
function UseCallback() {
//   return (
//     <div>
//         <h1>UseCallback</h1>
//     </div>
//   )
const [age,setAge]= useState(18);
const [salary,setSalaray] = useState(10000);
const updateAge = useCallback(()=>{
   setAge(age + 1)
},[age])
const updateSalaray =useCallback(()=>{
    setSalaray(salary+1000)
},[salary])
console.log('my parent component...')
return( 
    <div>
        <Title></Title>
        <h1>useCallback</h1>
        <Count text="age" Count={age} />
        <Button handleClick={updateAge}>updateAge</Button>
        <Count text="salary" Count={salary} />
        <Button handleClick={updateSalaray}>updateSalary</Button>

    </div>
)
}

export default UseCallback