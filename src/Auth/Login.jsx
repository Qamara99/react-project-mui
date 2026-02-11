import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert
} from '@mui/material';

import Link from '@mui/material/Link';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/900.css';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {

  const [serverError, setServerError] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);

  const loginSchema = yup.object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const loginForm = async (values) => {
    try {
      const response = await axios.post(
        'https://knowledgeshop.runasp.net/api/auth/Account/Login',
        {
          email: values.email,
          password: values.password
        }
      );

      console.log('response', response.data);

      setServerError(null);
      setOpenSuccess(true);

    } catch (error) {
      setServerError(
        error.response?.data?.message || "Invalid email or password"
      );
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
      <Box sx={{ width: '82%', padding: '40px 60px' }}>
        <Typography
          variant="h6"
          fontWeight={900}
          sx={{
            color: 'black',
            fontFamily: 'Roboto, Arial, sans-serif',
            mb: 2,
            fontSize: '1.5rem'
          }}
        >
          Log in to your account
        </Typography>

        <Box component="section" py={3} sx={{ border: '1px solid #ddd', pl: 2, pr: 2 }}>
          <Box
            component="form"
            onSubmit={handleSubmit(loginForm)}
            display="flex"
            flexDirection="column"
            gap={3}
            mt={3}
            alignItems="start"
          >

        
            <Box display="flex" width="75%" justifyContent="space-between">
              <Typography sx={{ fontSize: '0.75rem', color: 'black' }}>
                Email
              </Typography>

              <TextField
                {...register('email')}
                sx={{ width: '70%' }}
                size="small"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>

        
            <Box display="flex" width="75%" justifyContent="space-between">
              <Typography sx={{ fontSize: '0.75rem', color: 'black' }}>
                Password
              </Typography>

              <TextField
                {...register('password')}
                sx={{ width: '70%' }}
                size="small"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </Box>

         
            {serverError && (
              <Typography color="error" fontSize="13px">
                {serverError}
              </Typography>
            )}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, ml: '42%' }}>

 <Link
                component={RouterLink}
                to="/"
                sx={{
                  color: 'grey',
                  transition: '0.3s',
                  '&:hover': { color: '#ec6b81' },
                  fontSize: '13px'
                }}
                underline="none"
              >
               Forgot your password?

              </Link>
              </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', ml: '45%' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "black",
                  boxShadow: "none",
                  textTransform: 'none',
                }}
              >
                Sign in
              </Button>
            </Box>
<Box
  sx={{
    borderBottom: "1px solid #ddd",
    width: "100%",
    my: 1
  }}
></Box>
        
            <Box display="flex" gap={1} sx={{ justifyContent: 'center', ml: '40%' }}>
              <Typography sx={{ fontSize: '13px', color: 'grey' }}>
                No account?
              </Typography>

              <Link
                component={RouterLink}
                to="/register"
                sx={{
                  color: 'grey',
                  transition: '0.3s',
                  '&:hover': { color: '#ec6b81' },
                  fontSize: '13px'
                }}
                underline="none"
              >
                Create one here
              </Link>
            </Box>

          </Box>
        </Box>
      </Box>

      
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Login successful 
        </Alert>
      </Snackbar>

    </Box>
  )
}