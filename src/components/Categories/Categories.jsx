import { Box, Card, CardContent, CircularProgress, colors, Grid, Typography } from "@mui/material";
import useCategories from "./useCategories";
import "@fontsource/roboto"
import "@fontsource/poppins/700.css";
export default function Categories() {

  const { data, isLoading, isError, error } = useCategories();
  if (isLoading) return <CircularProgress />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Box className="categories">
      <Box>
        <Typography component={"h4"} variant="h4" sx={{ color: 'black', fontWeight: 700, textAlign: 'center', pt: 3, fontFamily: 'poppins' }}>Popular Categories</Typography>
        <Typography sx={{ color: '#867f7f', textAlign: 'center' }} >Some of our popular categories include cosmetic
        </Typography>
      </Box>

      <Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
        {data.map(category =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
            <Card sx={{ py: 2, textAlign: "center" ,backgroundColor:'#eeeeee', "&:hover": {
      backgroundColor: "#ed6a81",color:'white'}}}>
              <CardContent >
                <Typography component={'h4'} variant="h5" sx={{fontWeight:'bold'}}> {category.name} </Typography>
                <Typography sx={{color:'#867f7f'}}> category item</Typography>
              </CardContent>
            </Card>
          </Grid>)}

      </Grid>

    </Box>
  );
}