import React from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';
import useUpdateCartItem from '../../hooks/useUpdateCartItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const{mutate,isPending}=useRemoveFromCart();
  const{mutate:updateQuantity,isPending:updateisPending}=useUpdateCartItem();
  const navigate=useNavigate();
   const { data, isLoading, isError, error } = useCart();
        console.log("data",data);
        if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;
  return (
   <Box className="cart" sx={{py:5,width:"70%",px:30,textAlign:"center"}}>
<Typography variant='h5' sx={{color:"black",fontWeight:"600",pb:5}}>My Carts</Typography>

<TableContainer component={Paper}     
      sx={{  borderRadius: "4px" }}>
  <Table >
    <TableHead>
      <TableRow>
        <TableCell >
          Product Name
        </TableCell>

         <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
         Price
        </TableCell>

         <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
           Quantity
        </TableCell>

         <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
           Total
        </TableCell>

         <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
           Action
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody >
      {data.items.map(item=>(
        <TableRow>
          <TableCell >
            {item.productName}
          </TableCell>

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
            {item.price}$
          </TableCell >

          {/* <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
            {item.count}
          </TableCell> */}
         <TableCell sx={{ textAlign: "center", verticalAlign: "middle" }}>
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0.5 }}>
    
  
    <IconButton
      sx={{
        border: "1px solid grey",
        width: 25,
        height: 25,
      }}
      onClick={() => {
        if(item.count <= 1) return;
        item.count -= 1;
        item.totalPrice = item.count * item.price;
        updateQuantity({ productId: item.productId, count: item.count });
      }}
      disabled={updateisPending}
    >
      <RemoveIcon fontSize="small" />
    </IconButton>

 
    <Typography sx={{ width: "25px", textAlign: "center" }}>
      {item.count}
    </Typography>

  
    <IconButton
      sx={{
        border: "1px solid grey",
        width: 25,
        height: 25,
      }}
      onClick={() => {
        item.count += 1;
        item.totalPrice = item.count * item.price;
        updateQuantity({ productId: item.productId, count: item.count });
      }}
      disabled={updateisPending}
    >
      <AddIcon fontSize="small" />
    </IconButton>

  </Box>
</TableCell>

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}> 
            {item.totalPrice}$
          </TableCell>

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
            <Button color='error' variant='contained' onClick={()=>mutate(item.productId)} disabled={isPending}>
              REMOVE
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>

    <TableFooter>
      <TableCell colSpan={5} sx={{fontWeight:"bold"}}>
        Total : {data.cartTotal}$
      </TableCell>
    </TableFooter>
  </Table>
</TableContainer>
<Box
  sx={{
    display: "flex",
    justifyContent: "center", 
    gap: 2, 
    mt: 3,
  }}
>
  <Button variant="contained" sx={{backgroundColor:"#ec6b81"}} onClick={()=>navigate('/checkout')}> Process to Checkout</Button>

  <Button variant="outlined" sx={{color:"#ec6b81",borderColor:"#ec6b81"}} onClick={()=>navigate('/')} >Continue Shopping</Button>
</Box>
   </Box>
  )
}
