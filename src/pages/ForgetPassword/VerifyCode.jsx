import React, { useRef, useState, useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email;

  const [code, setCode] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  
  useEffect(() => {
    if (!email) {
      navigate('/reset-password');
    }
  }, [email, navigate]);

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

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

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const finalCode = code.join('');

    if (finalCode.length < 4) return;

    navigate('/reset-password', {
      state: {
        email,
        code: finalCode,
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
          p: 4,
          width: 400,
          textAlign: 'center',
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
          fontWeight="bold"
          sx={{ mb: 2, color: '#ec6b81' }}
        >
          Verify Code
        </Typography>

        <Typography sx={{ mb: 3, color: 'gray', fontSize: 14 }}>
          Enter the 4-digit code sent to your email
        </Typography>

       
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
          {code.map((num, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              value={num}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              maxLength={1}
              style={{
                width: 55,
                height: 55,
                fontSize: 22,
                textAlign: 'center',
                borderRadius: 10,
                border: '1px solid #ccc',
                outline: 'none',
                transition: '0.2s',
              }}
              onFocus={(e) => (e.target.style.border = '1px solid #ec6b81')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: '#ec6b81',
            py: 1.2,
            fontWeight: 'bold',
            '&:hover': { bgcolor: '#d85a70' },
          }}
        >
          Verify
        </Button>
      </Paper>
    </Box>
  );
}