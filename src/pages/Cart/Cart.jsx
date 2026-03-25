import React from 'react'
import useCart from '../../hooks/useCart';

export default function Cart() {

   const { data, isLoading, isError, error } = useCart();
        console.log("data",data);
  return (
    <div>
      cart
    </div>
  )
}
