
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import divimage from './../assets/images/divimage.jpg'
export default function Dividerimg() {
    return (

        <Box
            sx={{
                width: "100%",
                height: { xs: "15vh", sm: "25vh", md: "35vh" },
                position: "relative",
                overflow: "hidden",
                mt:5,mb:5
            }}
        >
            <Box
                component="img"

                src={divimage}
                alt="divimage"


                sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
        >
        </Box>
        </Box>
    )
}
