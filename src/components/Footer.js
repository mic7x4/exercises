import React from 'react'
import { Box , Stack, Typography } from '@mui/material'
import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="70px" bgcolor="#fff">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px" pb="24px">
        <img src={Logo} />
      </Stack>
    </Box>
  )
}

export default Footer