import React, { useState } from 'react'
import { Box, Typography, Button, TextField, IconButton, Divider, CircularProgress, Rating, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate, useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import Loader from '../../ui/Loader';
import useAddToCart from '../../hooks/useAddToCart';
import { useTranslation } from 'react-i18next';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useAddReview from '../../hooks/useAddReview';
export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProductDetails(id);
const {t}=useTranslation();
 
  const [qty, setQty] = useState(1);
  const { mutate, isPending } = useAddToCart();

  const [open, setOpen] = useState(false);
const [rating, setRating] = useState(0);
const [comment, setComment] = useState('');

const { mutate: addReview, isPending:reviewPending } = useAddReview(id);

const navigate = useNavigate();

const handleOpen = () => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    alert('You must login first to add a review');
    return;
  }

  setOpen(true);
};
const handleClose = () => setOpen(false);

const handleSubmitReview = () => {
  if (!rating || !comment.trim()) return;

  addReview(
    {
      Rating: Number(rating),
      Comment: comment.trim(),
    },
    {
      onSuccess: () => {
        setOpen(false);
        setRating(0);
        setComment('');
      },
    }
  );
};

  const handleAddToCart = () => {
    mutate({
      ProductId: id,
      Count: qty,
    });
  };

 if (isLoading) return <Loader />;

  if (isError) return <Box color="red">{error.message}</Box>;


  return (
    <>
      <Box sx={{ px: 8, pt: 6 }}>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6, alignItems: "flex-start" }}>


          <Box
            component="img"
            src={data.image}

            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: 400 },
              maxHeight: 500,
              objectFit: "contain",
            }}
          />


          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight={300} sx={{ color: "black" }} mb={2}>
              {data.name}
            </Typography>


            <Rating readOnly value={data.rate}></Rating>

            <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }} mb={1}>
              ${data.price}
            </Typography>



            <Typography color="text.secondary" mb={4} sx={{ lineHeight: 1.6 }}>
              {data.description}
            </Typography>

            <Typography variant="body2" color="gray" mb={3}>
              {t('Available Quantity')}:  {data.quantity}
            </Typography>
            <Divider sx={{ mb: 3 }} />


            <Box display="flex" gap={1} alignItems="center" mb={3}>

              <TextField
                type="number"
                size="small"

                value={qty}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value < 1) return setQty(1);
                  setQty(value);
                }} inputProps={{ min: 1 }}
                id="qty-field"
                sx={{ width: 60 }}
              />


              <Button
                variant="contained"
                sx={{ borderRadius: 20, px: 4, color: "black", fontWeight: "Bold", background: "#eeee", "&:hover": { background: "#ed6a81", color: "white" } }}
                onClick={handleAddToCart} disabled={isPending}
              >
                {t('Add To Cart')}
              </Button>
            </Box>


          </Box>
        </Box>
      </Box>

      <Box display={"flex"} gap={2} ml={20}>
        {data.subImages.map((img, index) =>
          <Box component={"img"} src={img} key={index} width={100} sx={{ border: 2 }}></Box>
        )}


      </Box>
<Box display="flex" justifyContent="space-between" alignItems="center" pl={22} mt={8} mb={2}>
  <Typography variant='h4' fontWeight={600} sx={{ color: "black" }}>
    {t('Reviews')}
  </Typography>

  <Button
    variant="contained"
    onClick={handleOpen}
    sx={{ bgcolor: "#ec6b81", '&:hover': { bgcolor: "#d85a70" },mr:"140px" }}
  >
    Add Review
  </Button>
</Box>
    <Box pl={20}>
  {data.reviews.map((review, index) => (
    <Card
      key={index}
      sx={{
        width: "90%",
        mb: 2,
        boxShadow: 3,
        borderRadius: 3,
        transition: "0.3s",
        '&:hover': {
          boxShadow: 6,
          transform: "scale(1.01)"
        }
      }}
    >
      <CardContent>
        <Typography variant="h6">
          {review.userName}
        </Typography>

        <Rating readOnly value={review.rating} />

        <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
          {review.comment}
        </Typography>

        <Typography variant="caption" sx={{ color: 'gray' }}>
          {review.createdAt}
        </Typography>
      </CardContent>
    </Card>
  ))}

</Box>

<Dialog open={open} onClose={handleClose} fullWidth>
  <DialogTitle sx={{ color: "#ec6b81" }}>
    Add Review
  </DialogTitle>

  <DialogContent>
    <Box mt={2}>
      <Rating
        value={rating}
        onChange={(e, newValue) => setRating(newValue)}
      />

     <TextField
  fullWidth
  multiline
  rows={4}
  label="Comment"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
/>
    </Box>
  </DialogContent>

  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>

    <Button
      onClick={handleSubmitReview}
      variant="contained"
      disabled={isPending}
      sx={{ bgcolor: "#ec6b81" }}
    >
      Submit
    </Button>
  </DialogActions>
</Dialog>
    </>
  );
}