import React, { useState } from 'react';
import useSendCode from '../../hooks/useSendCode';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  keyframes,
  Paper,
  TextField,
  Typography
} from '@mui/material';

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState('');

  const { mutate: sendCode, isPending: sending } = useSendCode();

  const navigate = useNavigate();

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
    const handleSendCode = () => {
    if (!email) return;

    sendCode(email, {
      onSuccess: () => {
        navigate('/verify-code', { state: { email } });
      },
    });
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
          textAlign="center"
          fontWeight="bold"
          sx={{ mb: 3, color: '#ec6b81' }}
        >
          Forgot Password
        </Typography>

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            '& label.Mui-focused': { color: '#ec6b81' },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#ec6b81',
            },
          }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleSendCode}
          disabled={sending}
          sx={{
            bgcolor: '#ec6b81',
            py: 1.2,
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: '#d85a70',
            },
          }}
        >
          {sending ? 'Sending...' : 'Send Code'}
        </Button>
      </Paper>
    </Box>
  );
}