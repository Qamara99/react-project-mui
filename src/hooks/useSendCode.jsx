import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance';
import { useMutation } from '@tanstack/react-query';

export default function useSendCode() {
  return  useMutation({
  mutationFn: (email) =>
    authAxiosInstance.post('/auth/Account/SendCode', { email }),
});
}