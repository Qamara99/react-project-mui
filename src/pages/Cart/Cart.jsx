import React from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader';
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';
import useRemoveFromCart from '../../hooks/useRemoveFromCart';

export default function Cart() {
  const{mutate,isPending}=useRemoveFromCart();
   const { data, isLoading, isError, error } = useCart();
        console.log("data",data);
        if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;
  return (
   <Box className="cart" sx={{py:5,width:"70%",px:30,textAlign:"center"}}>
<Typography variant='h5' sx={{color:"#ec6b81",fontWeight:"600",pb:5}}>My Carts</Typography>

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

          <TableCell sx={{ textAlign: "center", verticalAlign: "middle"}}>
            {item.count}
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
   </Box>
  )
}
