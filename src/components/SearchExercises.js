import React, {useState, useEffect} from 'react'
import { Box, Stack, TextField, Typography, Button} from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from '../components/HorizontalScrollbar'


const SearchExercises = () => {

  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBobyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {

      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);

      setBobyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData();
  }, [])
  

  const handleSearch = async ()=> {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)        
        || exercise.bodyPart.toLowerCase().includes(search)      
        );

        setSearch('');
        setExercises(searchedExercises)
  }
}
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography fontWeight={700} sx={{fontSize:{lg: "44px", xs : " 30px"}}} textAlign="center" mb="50px">
        Awesome Exercises <br/> You Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
          sx= {{
            input:{ fontWeight:"700", borderRadius:"4px", border:" none"},
            width: {lg:"1000px", xs:'350px'},
            backgroundColor:"#fff",
            borderRadius:"40px"
          }}
        />
        <Button className='search-btn' sx={{
          bgcolor:"#ff2625",
          color:"#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "14px" },
          position:'absolute',
          height:"56px",
          right:"0"
        }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%',p:"20px"}}>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises