import { Box, Card, CardContent, CircularProgress, colors, Grid, Typography } from "@mui/material";
import useCategories from "./useCategories";
import "@fontsource/roboto"
import "@fontsource/poppins/700.css";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import Category from "../../ui/Category";
import Loader from "../../ui/Loader";
import { useTranslation } from "react-i18next";
export default function Categories() {
const{t}=useTranslation();
  const { data, isLoading, isError, error } = useCategories();
  if (isLoading) return <Loader />;
  if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Box className="categories">
      <Box>
        <Typography component={"h4"} variant="h4" sx={{ color: 'black', fontWeight: 700, textAlign: 'center', pt: 3, fontFamily: 'poppins' }}>{t('Popular Categories')}</Typography>
        <Typography sx={{ color: '#867f7f', textAlign: 'center' }} >{t('Some of our popular categories include cosmetic')}
        </Typography>

      </Box>
<Box pl={32} >
  <Link  component={RouterLink} to="/categories" sx={{ color: '#ec6b81', fontWeight: 500,textDecoration: 'none','&:hover':{color:"grey"},
   }} >{t('show more')}</Link>

</Box>    
  <Grid container spacing={3} mt={3} justifyContent="center" alignItems="center">
        {data.map(category =>
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
           <Category category={category}></Category>
          </Grid>)}

      </Grid>

    </Box>
  );
}