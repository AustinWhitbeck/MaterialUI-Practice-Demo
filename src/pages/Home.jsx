import React from 'react'

// Custom Components
import TourCard from '../Components/TourCard';

// Material UI imports
import { Container, Grid, Typography } from '@mui/material';

//  Data imports
import cities from "../data.json";

const Home = () => {
    return (
        <Container 
        sx={{
          marginY: 5
        }}
      >

{/* Map the cities onto a typography component passing in the city as the title */}
        {cities.map((city) => 
        <>
          <Typography 
            variant="h4"
            componoent="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} tours.
          </Typography>
          <Grid container spacing={5}>
{/* Now map the cities.tours (array of tours) onto each tour card. Passing the 'tour' object as a prop to be used on the cards info */}
            {city.tours.map((tour, index) => (
              <TourCard 
              tour={tour}
              key={index}
              />
            ))}
         </Grid> 
         </>
        )}


      </Container>
    )
}

export default Home
