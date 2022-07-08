import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack , Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
    console.log(exercise)
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack direction="row">
            <Button sx={{ ml:"21px", color:"#fff", background: "#ffa9a9", fontSize:"14px",borderRadius: "20px", textTransform:'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml:"21px", color:"#fff", background: "#ffa717", fontSize:"14px",borderRadius: "20px", textTransform:'capitalize' }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="24px" color="#333" fontWeight="bold" mt="10px" textTransform="capitalize" pb="10px" fontSize="20px">
            {exercise.name}
        </Typography>
    </Link>
  )
  
}

export default ExerciseCard