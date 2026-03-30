import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import AuthaxiosInstance from '../api/AuthaxiosInstance'

export default function useAddToCart() {
  const queryclient=useQueryClient();
    const mutation=useMutation({
        mutationFn:async({ProductId,Count})=>{
return AuthaxiosInstance.post('/Carts',{
    "ProductId":ProductId,
    "Count":Count
});
        },
         onSuccess: (data) => {
    console.log("SUCCESS ✅", data);
    queryclient.invalidateQueries(['carts'])
  },
  onError: (error) => {
    console.log("ERROR ❌", error.response?.data);
  }
    })
  return mutation;
}
