import { useMutation } from '@tanstack/react-query'
import React from 'react'
import AuthaxiosInstance from '../api/AuthaxiosInstance'

export default function useAddToCart() {
    const mutation=useMutation({
        mutationFn:async({ProductId,Count})=>{
return AuthaxiosInstance.post('/Carts',{
    "ProductId":ProductId,
    "Count":Count
});
        },
         onSuccess: (data) => {
    console.log("SUCCESS ✅", data);
  },
  onError: (error) => {
    console.log("ERROR ❌", error.response?.data);
  }
    })
  return mutation;
}
