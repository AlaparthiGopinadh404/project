import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'Formik';
import * as Yup from 'yup';
import { useState,useEffect } from 'react';


function Formikdata() {
    const [array,setarray]=useState([])
    const initialValues={
        name:"",
        phone:"",
        email:"",
        website:"",
        address:"",
        education:"",
        age:"",
        gender:""
        
    };
    const validationSchema = Yup.object({
            name:Yup.string().min(3).max(15).required(),
            phone: Yup.number().min(100000000,'phone no 10 digits').max(9999999999,'phone no 10 digits').required(),
            email:Yup.string().matches().required(),
            website: Yup.string().required(),
            education:Yup.string().required(),
            age: Yup.number().required(),
            gender: Yup.string().required()
    });
    const onSubmit = (values)=>{
        console.log(values)
    }
  return (
    <div>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        onSubmit(values)
      }}

      
      />  
      <Form>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <label htmlFor='name'>Name</label>
                    <Field type="text" name="name" placeholder="Enter Name" className="form-control"/>
                    <ErrorMessage name="name"/>
                </div>

            </div>

        </div>
      </Form>
    </div>
    
  )
}

export default Formikdata ;