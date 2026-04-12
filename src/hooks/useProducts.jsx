// import React from 'react'
// import axios from "axios";
// import {
//   useQuery,

// } from '@tanstack/react-query'
// import axiosInstance from '../api/axiosInstance';
// import i18n from '../i18next';

// export default function useProducts() {

//      const getProducts = async () => {
//         const response = await axiosInstance.get(
//           "/Products"
//         );
//           console.log("FULL RESPONSE:", response);
    
//         return response.data.response.data;
        
//       };
    
//      const query = useQuery({
//         queryKey: ["products",i18n.language],
//         queryFn: getProducts,
//         staleTime: 1000 * 60 * 5,
//       });
    
//   return query;
// }


import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export default function useProducts(filters) {
  const query = filters
    ? `?page=${filters.page ?? 1}&limit=${filters.limit ?? 3}&search=${filters.search ?? ""}&sortBy=${filters.sortBy ?? "price"}&ascending=${filters.ascending ?? false}`
    : "";

  return useQuery({
    queryKey: ["products", filters ?? "all"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/Products${query}`);

      return res.data.response?.data ?? res.data.response ?? [];
    },
  });
}