import React from 'react'
import axios from "axios";
import {
  useQuery,

} from '@tanstack/react-query'
import axiosInstance from '../../api/axiosInstance';
import i18n from '../../i18next';
export default function useCategories(limit=4) {

     const getCategories = async () => {
        const response = await axiosInstance.get(
          `/Categories?limit=${limit}`
        );
          console.log("FULL RESPONSE:", response);
    
        return response.data.response.data;
        
      };
    
     const query = useQuery({
        queryKey: ["categories",i18n.language,limit],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
