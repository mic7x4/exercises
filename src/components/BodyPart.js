import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'
import { borderTop } from '@mui/system'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    console.log(bodyPart)
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={ 
            {
                borderTop: bodyPart === item ? "4px solid #ff2625": '',
                backgroundColor:' #fff ',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor:'pointer',
                gap: "44px"
            }     
        }
        onClick = {()=> {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior:'smooth'})
        }}
        >
        <img src={Icon} alt="icon" className='body-part-icon' style={{width: "40px", height:"40px" }}/>
        <Typography fontSize="25px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart