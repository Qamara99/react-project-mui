import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import hero from './../assets/images/hero.jpg'
export default function Hero() {
    return (

        <Box
            sx={{
                width: "100%",
                height: { xs: "35vh", sm: "45vh", md: "70vh" },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                component="img"

                src={hero}
                alt="hero"


                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />


            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: { xs: "5%", md: "7%" },
                    transform: "translateY(-50%)",
                    color: "black",
                }}
            >
                <Typography sx={{textTransform: "uppercase", fontSize: '20px' }}>real cover pink cushion</Typography>
                <Typography variant="h2" sx={{  textTransform: "uppercase", fontWeight: "400",fontSize: '4rem' }}>
                    Face makeup
                </Typography>

                 <Typography variant="h2" sx={{ mb: 4, textTransform: "uppercase", fontWeight: "bold",fontSize: '4.5rem'  }}>
                    sale 40% off
                </Typography>

                <Button variant="contained" sx={{backgroundColor:"#ec6b81",borderRadius: 20, px: 4,py:1,fontWeight:"800", boxShadow: "none",}}>
                    Shop Now
                </Button>
            </Box>
        </Box>
    )
}
