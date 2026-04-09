import React from 'react'
import AuthaxiosInstance from '../api/AuthaxiosInstance';
import { useQuery } from '@tanstack/react-query';
import i18n from '../i18next';

export default function useCart() {
   const getItems = async () => {
        const response = await AuthaxiosInstance.get('/Carts'
        );
          console.log("FULL RESPONSE:", response);
    
        return response.data;
        
      };
    
     const query = useQuery({
        queryKey: ["carts",i18n.language],
        queryFn: getItems,
        staleTime: 1000 * 60 * 5,
      });
    
  return query;
}
