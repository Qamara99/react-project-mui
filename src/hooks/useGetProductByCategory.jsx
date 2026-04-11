import React from 'react'
import axiosInstance from '../api/axiosInstance';
import { useQuery } from '@tanstack/react-query';


export default function useGetProductByCategory(id) {
  const getProductcat = async () => {
        const response = await axiosInstance.get(
          `/Products/category/${id}`
        );
          console.log("CATEGORY DATA:", response.data);
    
        return response.data.response;
        
      };
    
     const query = useQuery({
            queryKey: ["product-category", id],
        queryFn: getProductcat,
           enabled: !!id,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
