import React, { useState } from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader';
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useCheckout from '../../hooks/useCheckout';

export default function Checkout() {

    const { data, isLoading, isError, error } = useCart();
      const{mutate:checkout,isPending}=useCheckout();
    const[PaymentMethod,setPaymentMethod]=useState("Cash");
    console.log("data",data);
        if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
   <Box className="cart" sx={{py:5,width:"70%",px:30,textAlign:"center"}}>
<Typography variant='h5' sx={{color:"black",fontWeight:"600",pb:5}}>Checkout</Typography>

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

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
            {item.count}
          </TableCell>
        

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}> 
            {item.totalPrice}$
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
<Box py={3}>
<FormControl fullWidth >
  <InputLabel id="PaymentMethod">Payment Method</InputLabel>
  <Select
    labelId="PaymentMethod"
    id="demo-simple-select"
    value={PaymentMethod}
    label="PaymentMethod"
    onChange={(e)=>setPaymentMethod(e.target.value)}
  >
    <MenuItem value="Cash">Cash</MenuItem>
    <MenuItem value="Visa">Visa</MenuItem>
   
  </Select>
</FormControl>
   </Box>
     <Button variant="contained" sx={{backgroundColor:"#ec6b81"}} onClick={()=>checkout(PaymentMethod)}   disabled={isPending}> Pay Now</Button>
   
   </Box>
  )
}
