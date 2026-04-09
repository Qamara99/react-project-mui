import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useUpdatePassword() {
const queryClient = useQueryClient();

  return useMutation({
   
 mutationFn: ({ currentPassword, newPassword, confirmNewPassword }) =>
      authAxiosInstance.patch('/Profile/change-password', {
        CurrentPassword: currentPassword,
        NewPassword: newPassword,
        ConfirmNewPassword: confirmNewPassword,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
}