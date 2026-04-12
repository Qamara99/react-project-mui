import { useQuery } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance'
import i18n from '../i18next';

export default function useProfile() {
  const token = localStorage.getItem('accessToken');

  return useQuery({
    queryKey: ['profile', token, i18n.language],
    queryFn: async () => {
      const response = await authAxiosInstance.get('/Profile');
      return response.data;
    },
    staleTime: 1000 * 60 * 5
  });
}
