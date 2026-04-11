import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Grid, Rating, Divider } from '@mui/material';
import useGetProductByCategory from '../hooks/useGetProductByCategory';
import Loader from '../ui/Loader';

export default function GetProductbyCategory() {
  const { id } = useParams();
  const { data, isLoading, isError, error } =useGetProductByCategory(id);
console.log("data product category",data);
  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
   

     <Box sx={{ px: 5, py: 3 }}>
      <Typography variant="h4" mb={5} sx={{color:"black"}} textAlign={"center"}>
        Category Products
      </Typography>


      <Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
        {data?.map(product =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box sx={{width:"100%"}}>
            
            <Card sx={{ pt: 2, textAlign: "center" ,justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center" ,
                 transition: "0.3s ease",  
                 width:"100%", 
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: 6,              
      cursor: "pointer",
    },
            }}>
        <CardMedia component={'img'} image={product.image} sx={{width:'180px',textAlign:"center"}}></CardMedia>
              <CardContent sx={{
      backgroundColor: "#ffff", width: "100%",height:"100%"}}>
        <Divider/>
                <Typography component={'h4'} variant="h6" sx={{fontWeight:'bold'}}> {product.name} </Typography>
                   <Rating readOnly value={product.rate}></Rating>
                <Typography sx={{color:'#ed6a81',fontWeight:'bold'}}> {product.price}$</Typography>
              </CardContent>
            </Card>
            
            </Box>
             
          </Grid>)}

      </Grid>

    </Box>
  )}