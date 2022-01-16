import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

// *** NOTES *** //

/*

1. The Grid component is the same tag but it is labeled as 'item' as a prop for the children of the parent Grid 

2. The Grid works on a total of 12 spaces. So if we want 3 cards per row, then the xs value needs to be '4' (4+4+4 = 12)
*/


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3}>
                Hello!
            </Paper>
        </Grid>
    )
}

export default TourCard;
