import React, { useState } from 'react';
import { Box, TextField, Button, Alert, Typography } from '@mui/material';
import { useUpdateEmail } from '../../hooks/useUpdateEmail';

export default function changeEmail() {
  const { mutate, isPending, isError, error, isSuccess } = useUpdateEmail();

  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    mutate(email);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Change Email
      </Typography>

      {/* Error */}
      {isError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error?.response?.data?.message || 'Failed to update email'}
        </Alert>
      )}

      {/* Success */}
      {isSuccess && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Email updated successfully!
        </Alert>
      )}

      <TextField
        label="New Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={isPending}
      >
        {isPending ? 'Saving...' : 'Update Email'}
      </Button>
    </Box>
  );
}