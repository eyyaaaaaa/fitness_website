import React, {useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import searchExercises from '../components/searchExercises';
import Exercises from '../components/Exercises';
const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <searchExercises/>  
        <Exercises />
    </Box>
  )
}

export default Home