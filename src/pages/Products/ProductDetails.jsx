import React from 'react'
import { Box, Typography, Button, TextField, IconButton, Divider, CircularProgress, Rating, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProductDetails(id);

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );

  if (isError) return <Box color="red">{error.message}</Box>;


  const handleAddToCart = () => {
    const qty = Number(document.getElementById("qty-field").value) || 1;
    console.log("Add to cart:", data.name, "Quantity:", qty);
   
  };

 
  const changeQty = (delta) => {
    const input = document.getElementById("qty-field");
    let value = Number(input.value) || 1;
    value += delta;
    if (value < 1) value = 1;
    input.value = value;
  };

  return (
    <>
    <Box sx={{ px: 8, pt:6 }}>
     
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6, alignItems: "flex-start" }}>
        
        
        <Box
          component="img"
          src={data.image}
        
          sx={{
            flexShrink: 0,
            width: { xs: "100%", md: 400 },
            maxHeight: 500,
            objectFit: "contain",
          }}
        />

       
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={300} sx={{color:"black"}} mb={2}>
            {data.name}
          </Typography>


<Rating readOnly value={data.rate}></Rating>

          <Typography variant="h6"  sx={{fontWeight:"bold" ,color:"black"}} mb={1}>
            ${data.price}
          </Typography>

      

          <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.6 }}>
            {data.description}
          </Typography>

 <Typography variant="body2" color="gray" mb={3}>
        Available Quantity:  {data.quantity}
          </Typography>
          <Divider sx={{ mb: 3 }} />

         
          <Box display="flex" gap={1} alignItems="center" mb={3}>
           
            <TextField
              type="number"
              size="small"
              defaultValue={1}
              inputProps={{ min: 1 }}
              id="qty-field"
              sx={{ width: 60 }}
            />
          

            <Button
              variant="contained"
              sx={{ borderRadius: 20, px: 4,color:"black",fontWeight:"Bold", background: "#eeee", "&:hover": { background: "#ed6a81" ,color:"white"} }}
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          </Box>

        
        </Box>
      </Box>
    </Box>

<Box display={"flex"} gap={2} ml={20}>
    {data.subImages.map((img,index)=>
        <Box component={"img"} src={img} key={index} width={100} sx={{border:2}}></Box>
    )}


</Box>

    <Typography variant='h4' fontWeight={600} pl={22} mt={8} sx={{color:"black"}}>Reviews</Typography>
    <Box pl={20} > 
     <Card sx={{width:"90%"}}>
        <CardContent>
      {data.reviews.map(review=>
      <Box mb={6}>
           <Typography gutterBottom variant="h5" component="div">
           {review.userName}
          </Typography>
          <Rating readOnly value={review.rating}></Rating>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>{review.comment}
          </Typography>
       
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize:"0.7rem"}}>{review.createdAt}</Typography> 

        <Divider sx={{mt:"10px"}}></Divider>
        </Box>
      )}
      </CardContent>
      </Card>
    </Box>
    </>
  );
}