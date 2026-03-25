import React from 'react'
import useCategories from '../../components/Categories/useCategories';
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import Category from '../../ui/Category';
import Loader from '../../ui/Loader';

export default function CategoriesPage() {

    const { data, isLoading, isError, error } = useCategories(7);
  if (isLoading) return <Loader/>
  if (isError) return <Box color="red">{error.message}</Box>;

  
  
  return (
  <Box mx={20}>
      <Grid container mt={3} justifyContent="center" alignItems="center" spacing={2}>
        {data.map(category =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Category category={category}></Category>
          </Grid>)}

      </Grid>

    </Box>
  );
}
