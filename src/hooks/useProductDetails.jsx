import React from 'react'
import axios from "axios";
import {
  useQuery,

} from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance';
import i18n from '../i18next';

export default function useProductDetails(id) {
  const getProduct = async () => {
        const response = await axiosInstance.get(
          `/Products/${id}`
        );
          console.log("FULL RESPONSE:", response);
    
        return response.data.response;
        
      };
    
     const query = useQuery({
        queryKey: ["product",i18n.language,id],
        queryFn: getProduct,
           enabled: !!id,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
