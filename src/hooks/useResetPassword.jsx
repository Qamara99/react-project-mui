import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useResetPassword() {
 return useMutation({
  mutationFn: (data) =>
      authAxiosInstance.patch('/auth/Account/ResetPassword', {
        code: data.code,
        newPassword: data.newPassword,
        email: data.email,
      }),
  });
}