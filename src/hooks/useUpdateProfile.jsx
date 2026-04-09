import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance';

export  function useUpdateProfile() {
 const queryClient=useQueryClient();
 return useMutation({
    mutationFn:(data)=> authAxiosInstance.patch(`/Profile`,data),
    onSuccess:()=>{
        queryClient.invalidateQueries(['profile'])
    }
 })
}
