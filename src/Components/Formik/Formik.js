import React from 'react';
import { useState,useEffect } from 'react';
// import {Formik,Form,Field,ErrorMessage} from 'Formik';
// import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormikData=()=> {
    const [array,setarray]=useState([''])
    const navigate=useNavigate();
    useEffect(()=>{
        getdata()
    },[])
    const getdata=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res)
            setarray(res?.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const Delete = (i)=>{
       var temp=[...array]
       temp.splice(i,1)
       console.log(temp)
       setarray(temp)
    }
  return (
    <div>
        <h1>Formik</h1>
        <table className='table table-responsive table-bordered'>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Actions</th>


                </tr>
            </thead>
            <tbody>

                {array && array.map((a,i)=>{
                        return <tr key={i}>
                            <td>{a?.id}</td>
                            <td>{a?.name}</td>
                            <td>{a?.email}</td>
                            <td>{a?.website}</td>
                            <td>{a?.phone}</td>
                            <td>{a?.company?.name}</td>
                            <td>{a?.address?.street}</td>
                            <td><button type="submit" className='btn btn-primary' onClick={()=>{navigate('/edit',{state:{a,i}})}}>Edit</button></td>
                            <td><button type="submit" className='btn btn-danger' onClick={()=>{Delete(i)}}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default FormikData;