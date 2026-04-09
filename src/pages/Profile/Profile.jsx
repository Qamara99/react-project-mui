import { Box, Card, CardActionArea, CardContent, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useTranslation } from 'react-i18next';
import useProfile from '../../hooks/useProfile';
import Loader from '../../ui/Loader';
export default function Profile() {
    const{t}=useTranslation();
const navigate = useNavigate();
    const { data, isLoading, isError, error } = useProfile();
            console.log("data",data);
            if (isLoading) return <Loader />;
      if (isError) return <Box color="red">{error.message}</Box>;

  return (
    <Box sx={{ padding: "40px" }} className="Profile">
     
      <Typography variant="h4" fontWeight="bold" mb={4} sx={{color:"black"}}>
        {t('My account')}
      </Typography>
<Grid container spacing={3}>
       
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{height:"80%"}}>
            <CardActionArea onClick={() => navigate("info")} sx={{'&:hover':{ color: '#ec6b81', },}}>
              <CardContent sx={{ textAlign: "center", pb: 5}}>
                <PersonIcon sx={{ fontSize: 40, mb: 2 }} />
                <Typography fontWeight="bold">
                  INFORMATION
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

       
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <Card sx={{height:"80%"}}>
            <CardActionArea onClick={() => navigate("orders")} sx={{'&:hover':{ color: '#ec6b81'},}}>
              <CardContent sx={{ textAlign: "center", pb:5 }}>
                <CalendarMonthIcon sx={{ fontSize: 40, mb: 2 }} />
                <Typography fontWeight="bold">
                  Order history and details
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

       <Box>
        <Outlet/>
    </Box>
    </Box>
  );
}
