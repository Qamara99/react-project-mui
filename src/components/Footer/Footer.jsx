

import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import logolight from './../../assets/images/logolight.webp'
export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#0f0f0f', color: 'white', pt: 6, pb: 2 ,mt:10}}>
      <Box sx={{ px: 8 }}>
        <Grid container spacing={4}>

         
          <Grid item xs={12} md={4} >
           <Box sx={{ pb: 2 }}>
                         <img
                           src={logolight}
                           alt="Logo"
                           style={{ width: 160 }}
                         />
                       </Box>

            <Typography variant="body2" sx={{ color: '#aaa', mb: 2 ,maxWidth:"35%"}}>
              Location: 4710-4890 Breckinridge St, Fayetteville USA
            </Typography>

            <Typography variant="body2" sx={{ color: '#aaa' }}>
              We are a team of designers and developers that create high quality
              Magento, Prestashop, Opencart.
            </Typography>
          </Grid>

          {/* Column 1 */}
          <Grid item xs={6} md={2}>
            <Typography fontWeight="bold" mb={2}>Services</Typography>

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

          {/* Column 2 */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight="bold" mb={2}>Support</Typography>

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

          {/* Column 3 */}
          <Grid item xs={6} md={3}>
            <Typography fontWeight="bold" mb={2}>Info</Typography>

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

      {/* Bottom bar */}
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
        }}
      >
        <Typography variant="body2" sx={{ color: '#aaa' }}>
          Copyright © 2022 All Rights Reserved | Made with ❤️ by HasThemes
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box sx={{ width: 40, height: 25, bgcolor: '#333' }} />
          <Box sx={{ width: 40, height: 25, bgcolor: '#333' }} />
          <Box sx={{ width: 40, height: 25, bgcolor: '#333' }} />
        </Box>
      </Box>
    </Box>
  );
}