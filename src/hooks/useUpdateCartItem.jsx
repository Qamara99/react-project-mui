import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useUpdateCartItem() {
 const queryClient=useQueryClient();
 return useMutation({
    mutationFn:({productId,count})=> authAxiosInstance.patch(`/Carts/${productId}`,{count}),
    onSuccess:()=>{
        queryClient.invalidateQueries(['carts'])
    }
 })
}
