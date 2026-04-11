import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Category({ category }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/category/${category.id}`)}
      sx={{
        width: "90%",
        py: 1,
        textAlign: "center",
        backgroundColor: '#eeeeee',
        cursor: 'pointer',
        transition: '0.3s',
        "&:hover": {
          backgroundColor: "#ed6a81",
          color: 'white',
          transform: 'scale(1.03)'
        }
      }}
    >
      <CardContent>
        <Typography component="h4" variant="h5" sx={{ fontWeight: 'bold' }}>
          {category.name}
        </Typography>

        <Typography sx={{ color: '#867f7f' }}>
          category item
        </Typography>
      </CardContent>
    </Card>
  );
}