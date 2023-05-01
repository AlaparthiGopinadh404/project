import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Tabledata() {
    const [array,setarray]= useState(['']);
    const[key,setkey]=useState('');
    // const[temp,settemp]=useState([''])
    useEffect(()=>{
        Tablesearchdata()
    },[])
    const Tablesearchdata =() =>{
        setkey('')

        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response)
            setarray(response?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
    const handlechange=(e)=>{
        setkey(e.target.value);
        console.log(key);
     
        var temp2=[...array]
        // settemp(temp2)
       
        const x=temp2.filter((k,l)=>{
          if(k.title.toLowerCase().includes(key.toLowerCase())|| k.body.toLowerCase().includes(key.toLowerCase())){
            return true ;
          }
          else{
            return false ;
          }
           
        })
        
        setarray(x);
        console.log(x);
        if(e.target.value===''){
            Tablesearchdata ()
        }
      
    
    }

    
//  const resetInputField = ()=>{
//     setarray('');
    
//  }

    // function xyz(){
  
    //     var temp2=[...array]
    //     const x=temp2.filter((k,l)=>{
    //       if(k.title.toLowerCase().includes(key.toLowerCase())){
    //         return true ;
    //       }
    //       else{
    //         return false ;
    //       }
    
    //     })
    //     setarray(x);
    //     console.log(x)
    
    //   }
  
  return (
    <div className='container'>
        {/* <h1>Tabledata</h1> */}
        <input type="text" name="search" className='m-2' value={key} onChange={handlechange}  />
        {/* <button type="submit" className='btn btn-primary m-2' onClick={xyz}> Search</button> */}
        <button type="submit" className='btn btn-success m-2' onClick={()=>{
            Tablesearchdata()
            
        }} >Reset</button>
        <table className='table table-bordered table-responsive'>
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th >Title</th>
                    <th >Body</th>
                    {/* <th>Actions</th> */}
                </tr>
            </thead>
            <tbody>
                {array && array.map((a,i)=>{
                        return<tr key={i}>
                            <td>{a?.id}</td>
                            <td>{a?.title}</td>
                            <td>{a?.body}</td>
                            {/* <td><button type="submit" className='btn btn-primary'>Edit</button></td>
                            <td><button type="submit" className='btn btn-danger'>Delete</button></td> */}
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Tabledata ;