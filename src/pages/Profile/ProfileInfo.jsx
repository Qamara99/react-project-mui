import React, { useState, useEffect } from 'react';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';

import Loader from '../../ui/Loader';
import { Box, Divider, TextField, Button, Typography, Alert } from '@mui/material';
import useProfile from '../../hooks/useProfile';
import useUpdatePassword from '../../hooks/useUpdatePassword';
import useUpdateEmail from '../../hooks/useUpdateEmail';

export default function ProfileInfo() {
  const { data, isLoading, isError, error } = useProfile();

  const { mutate: updateEmail,isPending: emailLoading,
    isError: emailError,
    error: emailErrObj,
    isSuccess: emailSuccess,
  } = useUpdateEmail();

  const {
    mutate: updatePassword,
    isPending: passLoading,
    isError: passError,
    error: passErrObj,
    isSuccess: passSuccess,
  } = useUpdatePassword();

  const {
    mutate: updateUserInfo,
    isPending: infoLoading,
    isError: infoError,
    error: infoErrObj,
    isSuccess: infoSuccess,
  } = useUpdateProfile();

  const [newEmail, setNewEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  useEffect(() => {
    if (data) {
    
      setFullName(data.fullName || '');
      setPhoneNumber(data.phoneNumber || '');
      setCity(data.city || '');
    }
  }, [data]);

  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;


  const handleUserInfoUpdate = () => {
    updateUserInfo({ fullName, phoneNumber, city });
  };

  
  const handleEmailUpdate = () => {
    updateEmail(newEmail);
  };

 
  const handlePasswordUpdate = () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) return;

    if (newPassword !== confirmNewPassword) return;

    updatePassword({
      currentPassword,
      newPassword,
      confirmNewPassword,
    });
  };

 
  return (
  <Box sx={{ mt: 4, p: 3 }}>

    <Typography variant="h5" mb={3} textAlign="center" sx={{color:"black"}}>
      My Profile
    </Typography>

   
    <Box sx={{ p: 3, mb: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>
      
      {infoSuccess && <Alert severity="success">Info updated successfully</Alert>}
      {infoError && <Alert severity="error">{infoErrObj?.response?.data?.message}</Alert>}

      <TextField
        label="Full Name"
        fullWidth
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Phone Number"
        fullWidth
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="City"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleUserInfoUpdate}
         sx={{backgroundColor:"#ec6b81"}}
        disabled={infoLoading}
      >
        {infoLoading ? 'Saving...' : 'Update info'}
      </Button>

    </Box>

   


    <Box sx={{ p: 3, mb: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>

      {emailSuccess && <Alert severity="success">Email update sent. Please verify your email.</Alert>}
      {emailError && <Alert severity="error">{emailErrObj?.response?.data?.message}</Alert>}

      <TextField
        label="Email"
        fullWidth
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
         sx={{backgroundColor:"#ec6b81"}}
        onClick={handleEmailUpdate}
        disabled={emailLoading}
      >
        {emailLoading ? 'Saving...' : 'Update Email'}
      </Button>

    </Box>



    <Box sx={{ p: 3, bgcolor: '#fff', borderRadius: 2, boxShadow: 2 }}>

      {passSuccess && <Alert severity="success">Password updated successfully</Alert>}
      {passError && <Alert severity="error">{passErrObj?.response?.data?.message}</Alert>}

      <TextField
        label="Current Password"
        type="password"
        fullWidth
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="New Password"
        type="password"
        fullWidth
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        value={confirmNewPassword}
        onChange={(e) => setConfirmNewPassword(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        sx={{backgroundColor:"#ec6b81"}}
        onClick={handlePasswordUpdate}
        disabled={passLoading}
      >
        {passLoading ? 'Saving...' : 'Update Password'}
      </Button>

    </Box>

  </Box>
);
}