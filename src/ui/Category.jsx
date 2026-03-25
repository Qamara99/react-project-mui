import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Category({category}) {
  return (
   <Card sx={{ width:"90%",py: 1, textAlign: "center" ,backgroundColor:'#eeeeee', "&:hover": {
      backgroundColor: "#ed6a81",color:'white'}}}>
              <CardContent >
                <Typography component={'h4'} variant="h5" sx={{fontWeight:'bold'}}> {category.name} </Typography>
                <Typography sx={{color:'#867f7f'}}> category item</Typography>
              </CardContent>
            </Card>
  )
}
