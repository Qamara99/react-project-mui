import React from 'react'
import useCategories from '../../components/Categories/useCategories';
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import Category from '../../ui/Category';
import Loader from '../../ui/Loader';
import { useTranslation } from 'react-i18next';

export default function CategoriesPage() {

    const { data, isLoading, isError, error } = useCategories(7);
      const{t}=useTranslation();
    
  if (isLoading) return <Loader/>
  if (isError) return <Box color="red">{error.message}</Box>;

  
  
  return (
  <Box mx={20}>
    <Typography variant='h4' pt={5} pb={3} sx={{ color: '#ec6b81',textAlign:"center"}}>{t('Categories')}</Typography>
      <Grid container mt={3} justifyContent="center" alignItems="center" spacing={2}>
        {data.map(category =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
        <Category category={category}></Category>
          </Grid>)}

      </Grid>

    </Box>
  );
}
