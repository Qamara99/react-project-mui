import React, { useState } from 'react'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Box, Button, TextField, Typography, Checkbox } from '@mui/material';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@mui/material';
import Link from '@mui/material/Link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/900.css';

import { Link as RouterLink } from 'react-router-dom';
export default function Register() {

  const [serverErrors,setServerErrors]=useState([]);
let registerSchema= yup.object({
  firstName:yup.string().required("first name is required")
    .matches(/^[A-Za-z]+$/, "First name must contain only letters"),

  lastName:yup.string().required("last name is required")
    .matches(/^[A-Za-z]+$/, "First name must contain only letters"),

  email:yup.string().email("email must be valid"),
  password:yup.string().required("password is required")
  .min(6,"password must be at least 6 characters")
    .matches(/[A-Z]/,"password must contain at least one uppercase letter")
    .matches(/[a-z]/,"password must contain at least one lowercase letter")
    .matches(/[\d]/,"password must contain at least one number")
    .matches(/[@$%?&!*]/,"password must contain at least one special character")
    , 
  birthdate: yup
    .date()
    .nullable()
    .typeError("Invalid date format")
    .max(new Date(), "Birthdate cannot be in the future")
  
});




  const { control, register, handleSubmit, formState: { errors } } = useForm(
    {resolver: yupResolver(registerSchema),mode:'onBlur'}
  );

  const registerForm = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
       userName: values.email,
      fullName: `${values.firstName} ${values.lastName}`,
      phoneNumber:values.phoneNumber,
     
    };
    try {
      const response = await axios.post(
        'https://knowledgeshop.runasp.net/api/auth/Account/Register',
        payload
      );
      console.log('response', response);
    } catch (error) {
      setServerErrors(error.response.data.errors);
      console.log("FULL ERROR:", error.response?.data);
    }
  };

  return (

    <Box

      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt:2
      }}
    >

      <Box
        sx={{
          width: '82%',
          padding: '40px 60px',
        }}
      >
        <Typography variant="h6" fontWeight={900} sx={{ color: 'black', fontFamily: 'Roboto, Arial, sans-serif', mb: 2, fontSize: '1.5rem' }}>
          Create an account
        </Typography>
        <Box component="section" className="register-form" py={3} sx={{ border: '1px solid #ddd', pl: 2,pr:2 }}>
          <Box display={'flex'} gap={1}>
          <Typography sx={{ fontSize: '13px', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >
            Already have an account?
            </Typography>
            <Link component={RouterLink} to={'/login'} sx={{ color: 'black', transition: '0.3s', '&:hover': { color: '#ec6b81', },fontFamily: 'Roboto, Arial, sans-serif', fontSize: '13px' }} underline='none'>Log in instead!</Link>
</Box>
          
          <Box display="flex" alignItems="center" mb={3}>
            <Box width="260px">
              <FormLabel sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >Social title</FormLabel>
            </Box>

            <FormControl>
              <Controller
                name="social"
                control={control}
                defaultValue="Mr."
                render={({ field }) => (
                  <RadioGroup row {...field} >
                    <FormControlLabel sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} value="Mr."
                      control={<Radio sx={{ '&.Mui-checked': { color: '#2fb5d2', }, }} />} label="Mr." />
                    <FormControlLabel sx={{ fontSize: '0.75remx', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} value="Mrs."
                      control={<Radio sx={{ '&.Mui-checked': { color: '#2fb5d2', }, }} />} label="Mrs." />
                  </RadioGroup>
                )}
              />
            </FormControl>
          </Box>


          <Box
            component="form"
            onSubmit={handleSubmit(registerForm)}
            display="flex"
            flexDirection="column"
            gap={3}
            mt={3}
            alignItems="start"
          >
            <Box
              key={'firstName'}
              display="flex"
              width="75%"
              justifyContent={'space-between'}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >First Name</Typography>
              <TextField {...register('firstName')} sx={{ width: '70%' }} size="small" InputProps={{
                style: {
                  height: 32,
                  padding: '0 8px',
                },
              }} 
              error={errors.firstName}
              helperText={errors.firstName?.message}
              />
            </Box>

            <Box
              key={'lastName'}
              display="flex"
              width="75%"
              justifyContent={'space-between'}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >Last Name</Typography>
              <TextField {...register('lastName')} sx={{ width: '70%' }} size="small" InputProps={{
                style: {
                  height: 32,
                  padding: '0 8px',
                },
              }} 
               error={errors.lastName}
              helperText={errors.lastName?.message}/>
            </Box>

            <Box
              key={'email'}
              display="flex"
              width="75%"
              justifyContent={'space-between'}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >{'Email'}</Typography>
              <TextField {...register('email')} sx={{ width: '70%' }} size="small" InputProps={{
                style: {
                  height: 32,
                  padding: '0 8px',
                },
              }} 
               error={errors.email}
              helperText={errors.email?.message}/>
            </Box>
{serverErrors?.length>0 &&(
  <Box mt={2} color={'red'}>
    {serverErrors.map((err)=><Typography>{err}</Typography>)}
    </Box>
)}
            <Box
              key={'password'}
              display="flex"
              width="75%"
              justifyContent={'space-between'}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >{'Password'}</Typography>
              <TextField {...register('password')} sx={{ width: '70%' }} size="small" type='password' InputProps={{
                style: {
                  height: 32,
                  padding: '0 8px',
                },
              }} 
               error={errors.password}
              helperText={errors.password?.message}/>
            </Box>

 <Box
              key={'phoneNumber'}
              display="flex"
              width="75%"
              justifyContent={'space-between'}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif', }} >{'Phone Number'}</Typography>
              <TextField {...register('phoneNumber')} sx={{ width: '70%' }} size="small"  InputProps={{
                style: {
                  height: 32,
                  padding: '0 8px',
                },
              }} 
               error={errors.phoneNumber}
              helperText={errors.phoneNumber?.message}/>
            </Box>


            <Box
              key={'Birthdate'}
              display="flex"
              width="100%"
              justifyContent={'space-between'}
              gap={20}
            >
              <Typography sx={{ fontSize: '0.75rem', color: 'black', fontFamily: 'Roboto, Arial, sans-serif' }} >{'Birthdate'}</Typography>
              <Box width='78%' display="flex" gap={2}>
                <TextField {...register('Birthdate')} placeholder="MM/DD/YYYY"
                  sx={{ width: '68%' }} size="small" InputProps={{
                    style: {
                      height: 32,
                      padding: '0 8px',
                    },
                  }} 
                      error={errors.birthdate}
              helperText={errors.birthdate?.message}/>
                <Typography color="text.secondary" sx={{ fontSize: '0.90rem' }} >
                  Optional
                </Typography>
              </Box>
            </Box>


            <Box ml="260px" mt={2} display={'flex'} flexDirection={'column'}>
              <FormControlLabel sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '0.9rem',

                },

              }}
                control={<Checkbox sx={{
                  "&.Mui-checked": {
                    color: "black",

                  },
                }} />}
                label="Receive offers from our partners"
              />

              <FormControlLabel
                control={<Checkbox sx={{

                  "&.Mui-checked": {
                    color: "black",

                  },
                }} />}
                label="Sign up for our newsletter" sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',

                  },
                }}
              />

              <Typography  ml={4} mb={2} sx={{ fontSize: '0.9rem', }}>
                You may unsubscribe at any moment. For that purpose, please find our
                contact info in the legal notice.
              </Typography>

              <FormControlLabel

                control={<Checkbox required sx={{

                  "&.Mui-checked": {
                    color: "black",

                  },
                }} />}
                label="I agree to the terms and conditions and the privacy policy"
                sx={{
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',

                  },
                }}
              />

            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2,ml:'auto' }}>
              <Button type="submit" variant="contained" sx={{
                backgroundColor: "black",
                boxShadow: "none",
                fontFamily: 'Roboto, Arial, sans-serif',
                fontWeight: 300,
                textTransform: 'none',
              }} fontWeight={300}>Save</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
