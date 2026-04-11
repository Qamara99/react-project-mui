import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';

import Loader from '../../ui/Loader';
import useProfile from '../../hooks/useProfile';
import useUpdatePassword from '../../hooks/useUpdatePassword';
import useUpdateEmail from '../../hooks/useUpdateEmail';
import { useUpdateProfile } from '../../hooks/useUpdateProfile';

export default function ProfileInfo() {
  const { data, isLoading, isError, error } = useProfile();

  const {
    mutate: updateEmail,
    isPending: emailLoading,
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

  const handleUserInfoUpdate = () => updateUserInfo({ fullName, phoneNumber, city });
  const handleEmailUpdate = () => updateEmail(newEmail);

  const handlePasswordUpdate = () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) return;
    if (newPassword !== confirmNewPassword) return;

    updatePassword({ currentPassword, newPassword, confirmNewPassword });
  };

  return (
    <Box sx={{ mt: 6, px: 0 }}>

      

    
      <Box sx={{ display: "flex", alignItems: "stretch", width: "100%" }}>

     
        <Box sx={{ flex: 1, p: 1 }}>
          <Card
            sx={{
              boxShadow: "none",
              border: "none",
              borderRadius: 0
            }}
          >
            <CardContent>

              <Typography variant="h6" mb={2}>
                My Info
              </Typography>

              <Box display="flex" alignItems="center" mb={2}>
                <PersonIcon sx={{ mr: 1, color: "#ec6b81" }} />
                <Typography>{fullName}</Typography>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ mr: 1, color: "#ec6b81" }} />
                <Typography>{phoneNumber}</Typography>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <LocationCityIcon sx={{ mr: 1, color: "#ec6b81" }} />
                <Typography>{city}</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1, color: "#ec6b81" }} />
                <Typography>{data?.email}</Typography>
              </Box>

            </CardContent>
          </Card>
        </Box>

       
        <Divider orientation="vertical" flexItem sx={{ borderColor: "#ddd" }} />

        <Box sx={{ flex: 2, p: 3 }}>

         
          <Box sx={{
            p: 2,
            mb: 2,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            maxWidth: "500px"
          }}>
            {infoSuccess && <Alert severity="success">Info updated successfully</Alert>}
            {infoError && <Alert severity="error">{infoErrObj?.response?.data?.message}</Alert>}

            <TextField label="Full Name" fullWidth value={fullName} onChange={(e) => setFullName(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="Phone Number" fullWidth value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="City" fullWidth value={city} onChange={(e) => setCity(e.target.value)} sx={{ mb: 2 }} />

            <Button variant="contained" sx={{ backgroundColor: "#ec6b81" }} onClick={handleUserInfoUpdate}>
              Update Info
            </Button>
          </Box>

       
          <Box sx={{
            p: 2,
            mb: 2,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            maxWidth: "500px"
          }}>
            {emailSuccess && <Alert severity="success">Check your email</Alert>}
            {emailError && <Alert severity="error">{emailErrObj?.response?.data?.message}</Alert>}

            <TextField label="Email" fullWidth value={newEmail} onChange={(e) => setNewEmail(e.target.value)} sx={{ mb: 2 }} />

            <Button variant="contained" sx={{ backgroundColor: "#ec6b81" }} onClick={handleEmailUpdate}>
              Update Email
            </Button>
          </Box>

          <Box sx={{
            p: 2,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 1,
            maxWidth: "500px"
          }}>
            {passSuccess && <Alert severity="success">Password updated</Alert>}
            {passError && <Alert severity="error">{passErrObj?.response?.data?.message}</Alert>}

            <TextField label="Current Password" type="password" fullWidth value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="New Password" type="password" fullWidth value={newPassword} onChange={(e) => setNewPassword(e.target.value)} sx={{ mb: 2 }} />
            <TextField label="Confirm Password" type="password" fullWidth value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} sx={{ mb: 2 }} />

            <Button variant="contained" sx={{ backgroundColor: "#ec6b81" }} onClick={handlePasswordUpdate}>
              Update Password
            </Button>
          </Box>

        </Box>

      </Box>
    </Box>
  );
}