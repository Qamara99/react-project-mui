import React from 'react'
import axios from "axios";
import {
  useQuery,

} from '@tanstack/react-query'
import axiosInstance from '../api/axiosInstance';

export default function useProducts() {

     const getProducts = async () => {
        const response = await axiosInstance.get(
          "/Products"
        );
          console.log("FULL RESPONSE:", response);
    
        return response.data.response.data;
        
      };
    
     const query = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
