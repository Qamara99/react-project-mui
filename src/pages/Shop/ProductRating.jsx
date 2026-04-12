import { useEffect } from "react";
import useProductDetails from "../../hooks/useProductDetails";
import { Rating, Typography } from "@mui/material";

export default function ProductRating({ id, onLoad }) {
  const { data } = useProductDetails(id);

  const rating = data?.rate ?? 0;

  useEffect(() => {
    if (rating && onLoad) {
      onLoad(id, rating);
    }
  }, [rating]);

  return <Rating readOnly value={rating} />;
}