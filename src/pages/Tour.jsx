import React from 'react'
import { Container, Typography, Box, Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import ImageCollage from '../Components/ImageCollage';
import Accordian from '../Components/Accordian';
import { useContext } from "react";
import {  ThisTourContext } from '../ThisTourContext/ThisTourContext';

const Tour = () => {

    const { thisTour } = useContext(ThisTourContext);

    console.log(thisTour);

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
