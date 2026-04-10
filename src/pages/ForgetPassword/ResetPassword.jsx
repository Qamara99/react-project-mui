import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import useResetPassword from '../../hooks/useResetPassword';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;
  const code = location.state?.code;

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { mutate: resetPassword, isPending } = useResetPassword();

  useEffect(() => {
    if (!email || !code) {
      navigate('/forgot-password');
    }
  }, [email, code, navigate]);

  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const handleReset = () => {
    if (!newPassword || !confirmPassword) return;

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    resetPassword(
      {
        code,
        newPassword,
        email,
      },
      {
        onSuccess: () => {
          navigate('/login');
        },
      }
    );
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f7f7f7',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 400,
          p: 4,
          borderRadius: 4,
          textAlign: 'center',
          animation: `${fadeIn} 0.6s ease`,
          transition: '0.3s',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 10px 30px rgba(236,107,137,0.3)',
          },
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 3, color: '#ec6b81' }}
        >
          Reset Password
        </Typography>

        {/* New Password */}
        <TextField
          label="New Password"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{
            mb: 2,
            '& label.Mui-focused': { color: '#ec6b81' },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#ec6b81',
            },
          }}
        />

     
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            mb: 3,
            '& label.Mui-focused': { color: '#ec6b81' },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#ec6b81',
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleReset}
          disabled={isPending}
          sx={{
            bgcolor: '#ec6b81',
            py: 1.2,
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#d85a70',
            },
          }}
        >
          {isPending ? 'Resetting...' : 'Reset Password'}
        </Button>
      </Paper>
    </Box>
  );
}