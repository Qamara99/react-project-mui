import { useMutation } from '@tanstack/react-query';
import authAxiosInstance from '../api/AuthaxiosInstance';

export default function useAddReview(id) {
  return useMutation({
    mutationFn: (data) =>
      authAxiosInstance.post(
        `/Products/${id}/reviews`,
        data
      ),
  });
}