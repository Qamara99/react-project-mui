import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import logolight from './../../assets/images/logolight.webp'
export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f0f0f', color: 'white', pt: 6, pb: 2, mt: 10 }}>
      <Box sx={{ px: 8 }}>
        <Grid container spacing={2}>


          <Grid item xs={12} md={4} >
            <Box sx={{ pb: 2 }}>
              <img
                src={logolight}
                alt="Logo"
                style={{ width: 160 }}
              />
            </Box>

            <Typography variant="body2" sx={{ color: '#aaa', mb: 2, maxWidth: "65%" }}>
              Location: 4710-4890 Breckinridge St, Fayetteville USA
            </Typography>


          </Grid>
          <Grid item xs={12} md={6} >
            <Typography variant="body2" sx={{ color: '#aaa', maxWidth: "50%", pt: "11%" }}>
              We are a team of designers and developers that create high quality
              Magento, Prestashop, Opencart.
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>

            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              Delivery
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              Secure payment
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Login
            </Link>
          </Grid>

          <Grid item xs={6} md={2}>

            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              Legal Notice
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              Contact us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              My account
            </Link>
          </Grid>

          
          <Grid item xs={6} md={2}>

            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              About us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block" mb={1}>
              Sitemap
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Stores
            </Link>
          </Grid>

        </Grid>
      </Box>

      
      <Box
        sx={{
          mt: 5,
          borderTop: '1px solid #222',
          pt: 2,
          px: 8,
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 2,
          backgroundColor:"rgba(34, 32, 32, 0.93)"
        }}
      >
        <Typography variant="body2" sx={{ color: '#aaa',backgroundColor:"rgba(34, 32, 32, 0.93)",py:1 }}>
          Copyright © 2022 All Rights Reserved | Made with ❤️ by HasThemes
        </Typography>

      </Box>
    </Box>
  );
}