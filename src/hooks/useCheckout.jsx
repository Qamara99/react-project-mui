import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useCheckout() {
 const queryclient=useQueryClient();
    const mutation=useMutation({
        mutationFn:async(PaymentMethod)=>{
return authAxiosInstance.post('/Checkouts',{PaymentMethod}
);
        },
      onSuccess: (response) => {
  console.log("FULL RESPONSE", response);
  console.log("DATA", response.data);

  const url = response?.data?.url;

  if (url) {
    window.location.href = url;
  } else {
    console.log("❌ ما في url بالـ response");
  }

  queryclient.invalidateQueries(['carts']);
},
  onError: (error) => {
    console.log("ERROR ❌", error.response?.data);
  }
    })
  return mutation;

}
