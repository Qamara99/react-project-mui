import React from "react";
import useProfile from "../../hooks/useProfile";
import { Box, Card, Chip, Typography } from "@mui/material";
import Loader from "../../ui/Loader";

export default function ProfileOrder() {
  const { data, isLoading, isError, error } = useProfile();

  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Card
      sx={{
        mt:5,
        p: 2,
        borderRadius: 3,
        boxShadow: "none",
        border: "1px solid #eee",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        My Orders
      </Typography>

     
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "50px 1fr 1fr 1fr 1fr",
          fontWeight: "bold",
          mb: 1,
        }}
      >
        <div>#</div>
        <div>Amount Paid</div>
        <div>Paymant Status</div>
        <div>Order Status</div>
        <div>Date</div>
      </Box>

      {data.orders?.map((order, index) => (
        <Box
          key={index}
          sx={{
            display: "grid",
            gridTemplateColumns: "50px 1fr 1fr 1fr 1fr",
            alignItems: "center",
            py: 1.5,
            borderTop: "1px solid #eee",
          }}
        >
          
          <Typography>{index + 1}</Typography>

          <Typography>💰 {order.amountPaid}</Typography>

        
          <Chip
            label={order.status}
            color={
              order.status === "Active"
                ? "success"
                : order.status === "Pending"
                ? "warning"
                : "default"
            }
              size="small"
  sx={{ width: "fit-content" }}
          />

          
          <Typography>{order.paymentStatus || ""}</Typography>

        
          <Typography variant="body2" color="text.secondary">
            📅 {new Date(order.orderDate).toLocaleDateString("en-GB")}
          </Typography>
        </Box>
      ))}
    </Card>
  );
}