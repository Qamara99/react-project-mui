import React from 'react'
import useProducts from '../hooks/useProducts';
import { Box,Badge, Card, CardContent, CardMedia, CircularProgress, colors, Grid, Typography } from "@mui/material";
import "@fontsource/roboto"
import "@fontsource/poppins/700.css";
export default function Products() {
      const { data, isLoading, isError, error } = useProducts();
      console.log("data",data);
  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="red">{error.message}</Box>;
 
  return (
    <Box className="products" mb={8} mt={6}>
      <Box>
        <Typography component={"h4"} variant="h4" sx={{ color: 'black', fontWeight: 700, textAlign: 'center', pt: 3, fontFamily: 'poppins' }}>Our Products</Typography>
        <Typography sx={{ color: '#867f7f', textAlign: 'center' }} >Add our products to weekly line up
        </Typography>
      </Box>

      <Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
        {data.map(product =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
            <Box sx={{width:"100%"}}>
            <Badge
  badgeContent="New"
  overlap="rectangular"

  sx={{
    '& .MuiBadge-badge': {
      right: 20,
      top: 20,
      backgroundColor:"#ed6a81"

    }
,width:"100%",
color:"white"
  }}

>
            <Card sx={{ pt: 2, textAlign: "center" ,justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center" ,
                 transition: "0.3s ease",  
                 width:"100%", 
    "&:hover": {
      transform: "scale(1.05)", 
      boxShadow: 6,              
      cursor: "pointer",
    },
            }}>
        <CardMedia component={'img'} image={product.image} sx={{width:'220px',textAlign:"center"}}></CardMedia>
              <CardContent sx={{
      backgroundColor: "#eeeeee", width: "100%",height:"100%"}}>
                <Typography component={'h4'} variant="h6" sx={{fontWeight:'bold'}}> {product.name} </Typography>
                <Typography sx={{color:'#ed6a81',fontWeight:'bold'}}> {product.price}$</Typography>
              </CardContent>
            </Card>
            </Badge>
            </Box>
          </Grid>)}

      </Grid>

    </Box>
  );
}
