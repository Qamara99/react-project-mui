
import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useUpdateEmail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (NewEmail) =>
      authAxiosInstance.patch(
        '/Profile/change-email',
        { NewEmail }
      ),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },

    onError: (error) => {
      console.log('EMAIL UPDATE ERROR:', error.response?.data || error.message);
    },
  });
}