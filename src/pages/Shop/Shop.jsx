import React, { useState,useEffect } from "react";
import {Box,  Grid,  Typography,  TextField,  Select,  MenuItem,  InputLabel,FormControl,Button,Card,CardContent,CardMedia,Badge,} from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";
import useProducts from "../../hooks/useProducts";
import ProductRating from "./ProductRating";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

export default function Shop() {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 3,
    sortBy: "price",
    ascending: false,
  });

 const [search, setSearch] = useState("");
const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [ascending, setAscending] = useState(false);

  const [ratingsMap, setRatingsMap] = useState({});

  const { data = [], isLoading, isError, error } = useProducts({
    ...filters,
    search:debouncedSearch,
  });
  
  useEffect(() => {
  const delay = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500); 
  if (isError) return <Box color="red">{error.message}</Box>;

  if (isLoading) return <Loader />;


  return () => clearTimeout(delay);
}, [search]);
  const handleApply = () => {
    setFilters({
      page: 1,
      limit: 3,
      sortBy,
      ascending,
    });
  };

  const sortedData = [...data];

  if (sortBy === "rating") {
    sortedData.sort((a, b) => {
      const rateA = ratingsMap[a.id] ?? 0;
      const rateB = ratingsMap[b.id] ?? 0;

      return ascending ? rateA - rateB : rateB - rateA;
    });
  }

  return (
    <Box px={3} py={4}>
      <Box display="flex" gap={3}>
        
        <Box width="250px">
          <Typography fontWeight="bold" mb={2}>
            Filters
          </Typography>

          <FormControl fullWidth size="small" sx={{ mb: 2 }}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
              labelId="sort-label"
              label="Sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel id="order-label">Order</InputLabel>
            <Select
              labelId="order-label"
              label="Order"
              value={ascending}
              onChange={(e) => setAscending(e.target.value)}
            >
              <MenuItem value={true}>Asc</MenuItem>
              <MenuItem value={false}>Desc</MenuItem>
            </Select>
          </FormControl>

          <Button
            fullWidth
            sx={{ mt: 2, backgroundColor: "#ed6a81" }}
            variant="contained"
            onClick={handleApply}
          >
            Apply Filter
          </Button>
        </Box>

        <Box flex={1}>
          
         

          <Box display="flex" justifyContent="flex-start" mb={3} mt={3}>
            <TextField
              variant="standard"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ width: "200px" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Grid container spacing={4}>
            {sortedData.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box sx={{ width: "100%" }}>
                    <Badge
                      badgeContent="New"
                      overlap="rectangular"
                      sx={{
                        "& .MuiBadge-badge": {
                          right: 20,
                          top: 20,
                          backgroundColor: "#ed6a81",
                        },
                        width: "100%",
                        color: "white",
                      }}
                    >
                      <Card
                        sx={{
                          pt: 2,
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          transition: "0.3s ease",
                          width: "100%",
                          "&:hover": {
                            transform: "scale(1.05)",
                            boxShadow: 6,
                            cursor: "pointer",
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={product.image}
                          sx={{ width: "180px" }}
                        />

                        <CardContent
                          sx={{
                            backgroundColor: "#eeeeee",
                            width: "100%",
                          }}
                        >
                          <Typography fontWeight="bold">
                            {product.name}
                          </Typography>

                          <Typography
                            sx={{ color: "#ed6a81", fontWeight: "bold" }}
                          >
                            {product.price}$
                          </Typography>

                          <ProductRating
                            id={product.id}
                            onLoad={(id, rate) =>
                              setRatingsMap((prev) => ({
                                ...prev,
                                [id]: rate,
                              }))
                            }
                          />
                        </CardContent>
                      </Card>
                    </Badge>
                  </Box>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}