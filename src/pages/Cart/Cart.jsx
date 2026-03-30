import React from 'react'
import useCart from '../../hooks/useCart';
import Loader from '../../ui/Loader';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material';

export default function Cart() {
  
   const { data, isLoading, isError, error } = useCart();
        console.log("data",data);
        if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;
  return (
   <Box className="cart" sx={{py:5,width:"70%",px:30}}>
<Typography >My Carts</Typography>

<TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          Product Name
        </TableCell>

         <TableCell>
         Price
        </TableCell>

         <TableCell>
           Quantity
        </TableCell>

         <TableCell>
           Total
        </TableCell>

         <TableCell>
           Action
        </TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {data.items.map(item=>(
        <TableRow>
          <TableCell>
            {item.productName}
          </TableCell>

          <TableCell>
            {item.price}$
          </TableCell>

          <TableCell>
            {item.count}
          </TableCell>

          <TableCell>
            {item.totalPrice}$
          </TableCell>

          <TableCell>
            <Button color='error' variant='contained'>
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
