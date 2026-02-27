import React from 'react'
import axios from "axios";
import {
  useQuery,

} from '@tanstack/react-query'
import axiosInstance from '../../api/axiosInstance';
export default function useCategories() {

     const getCategories = async () => {
        const response = await axiosInstance.get(
          "/Categories"
        );
          console.log("FULL RESPONSE:", response);
    
        return response.data.response.data;
        
      };
    
     const query = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
