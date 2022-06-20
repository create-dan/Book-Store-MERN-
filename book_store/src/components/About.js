import React from 'react'
import {Box,Typography} from '@mui/material'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' >
      <Typography sx={{fontFamily: 'fantasy'}} variant='h3' >BOOK STORE APP</Typography>
      <Typography sx={{fontFamily: 'fantasy'}} variant='h4' >By Dnyan</Typography>
      </Box>
    </div>
  )
}

export default About