import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Container, Typography, Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import ImageCollage from '../Components/ImageCollage';
import Accordian from '../Components/Accordian';

//  list of cities
import cities from "../data.json";


/*

STEPS
1. get all of the cities
2. get the id from the params
3. make an object with that based on the id that is matching. 
4. pass the city to the component and then use it to fill out the data using it's values

Example City


{
          "id": 1,
          "name": "Immerse into the Falls",
          "duration": 5,
          "rating": 4.5,
          "numberOfReviews": 462,
          "price": 465,
          "image": "https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg"
        },

*/




const Tour = () => {

// ID 

const { cityId, tourId } = useParams();


// ThisCity - This filters out either Niagra Falls( id = 1) or Las Vegas (id = 2)

const thisCity = cities.filter((c) => 
    c.id == cityId
)

// This Tour - this filters out the tours for the city after we find which city we are in
console.log(`Current City`, thisCity);


const thisTour = thisCity.filter( (city) => city.tours.id == tourId);

console.log(`this filtered tour`, thisTour);
console.log(`cityId value `, cityId);
console.log(`cityId value `, tourId);



//  THIS CITY //



    return (
        <Container 
            sx={{
                width: 900
            }}
        >
            <Typography variant="h3" component="h1" marginTop={3}>
                Tour Name 

            </Typography>
            <Box 
                marginTop={3} 
                sx={{
                    display: "flex",
                }}
            >
                <img 
                    src="https://media.timeout.com/images/105124791/750/422/image.jpg" 
                    alt="Las Vegas photo" 
                    height={325}
                />
                <ImageCollage />
            </Box>
            <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        About This Ticket
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={3}>
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                    </Typography>
            </Box>
            <Box>
                    <Typography variant="h6" component="h4" marginTop={3}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="paragraph" component="p" marginTop={3}>
                        Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text Random Text
                    </Typography>
            </Box>
            <Box marginTop={5} marginBottom={20}>
                <Accordian />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour;
