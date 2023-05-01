import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container,Grid ,Typography} from "@material-ui/core";
import {Formik,Form} from'formik';
import * as Yup from 'yup';
import { TextField } from "./Components/MaterialUI/FormsUI/TextField";

const useStyles = makeStyles((theme)=>({
    fromWrapper:{
        marginTop: theme.spacing(5),
        marginBottom:theme.spacing(8)
    },
}));
const INITIAL_FORM_STATE = {
   firstName:'',
   lastName:'',
   email:'',
   phone:''
};
const FORM_VALIDATION=Yup.object().shape({
   firstName:Yup.string().required('required'),
   lastName:Yup.string().required('required'),
   email:Yup.string().email('Invalid email').required(),
   phone:Yup.number().integer().typeError('please enter a valid number').required()
   
})
 const App =()=>{
    const classes = useStyles();

    return(
        <Grid container>
           <Grid item xs={12}>
           <Container maxWidth="md">
              <div className={classes.fromWrapper}>
               <Formik
               initialValues={{...INITIAL_FORM_STATE}}
               validationSchema={FORM_VALIDATION}
               onSubmit={values=>{
                console.log(values);
               }}
                
               >
                <Form>
                   <Grid container spacing={2}>
                     <Grid item xs={12}>
                       <Typography>
                        Your Details
                       </Typography>
                     </Grid>
                     <Grid item xs={6}>
                        <TextField 
                        name ="firstName"
                        label="First Name"
                        />
                     </Grid>
                     <Grid item xs={6}>
                     <TextField 
                        name ="lastName"
                        label = "Last Name"
                        />
                     </Grid>
                     <Grid item xs={12}>
                       <Typography>
                        Address
                       </Typography>
                     </Grid>
                     <Grid item xs={12}>
                       <Typography>
                        Booking Information
                       </Typography>
                     </Grid>
                     <Grid item xs={12}>
                       <Typography>
                        Your Details
                       </Typography>
                     </Grid>

                   </Grid>
                </Form>
               </Formik>
              </div>
           </Container>
           
           </Grid>
        </Grid>
    )
 }
export default App ;