import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating';

// Icons Import

import {  AccessTime } from '@mui/icons-material';
 
// *** NOTES *** //

/*

1. The Grid component is the same tag but it is labeled as 'item' as a prop for the children of the parent Grid 

2. The Grid works on a total of 12 spaces. So if we want 3 cards per row, then the xs value needs to be '4' (4+4+4 = 12)

3. Box is used as a Div, you can use this to apply padding.
*/



//  *** NOTES ON THEME *** //

/*

1. Call the theme in a destructure method and get the 'createTheme' method that is similar to createContext

2. Similar to the 

*/


import {  createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  // Eache component
    components: {
      // Specific Component
      MuiTypography: {
        // Array of Types of Variants for the Typography Component
        variants: [
          // Each individual Variant within the array of Variants for the Typography Component
          // If the variant is = to "body2" then also do this additional styling.
          {
            props: {
              variant: "body2"
            },
            style: {
              fontSize: 11,
            }
          },
          {
            props: {
              variant: "body3"
            },
            style: {
              fontSize: 9,
            }
          },
        ]
      }
    }

})


const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
{/* Elevation is how far off thep age the box shadow makes it look */}
                <Paper elevation={3}>
                    <img src="https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world-1024x683.jpg" 
                        alt="vacation spot"
                        className="img"
                        />
{/* Padding is a prop for Box, this works on the X and Y axis */}
                    <Box paddingX={1}>
{/* variant of subtitle is a type of h2 that is even smaller than putting h4 as a variant but making it an h2 element */}
                        <Typography component="h2" variant="subtitle1">
                            Lose yourself in the Mountains
                        </Typography>

                            {/* Add a style sheet by using the prop 'sx' */}
                        <Box
                        
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        >
                            <AccessTime 
                            
                                sx={{
                                    width: 12.5
                                }}
                            />
                            <Typography variant="body2" component="paragraph" marginLeft={0.5}>
                                5 Hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                            marginTop={3}
                        >
                            
                            <Rating
                                name="read-only"
                                value={4.5}
                                readOnly
                                precision={0.5}
                                size="small"
                            />


                            
                            <Typography variant="body2" component="paragraph" marginLeft={0.5}>
                                4.5
                            </Typography>
                            <Typography variant="subtitle2" component="paragraph" marginLeft={3.5}>
                                (655 reviews)
                            </Typography>
                            
                        </Box>
                        <Box>
                                <Typography variant="h6" component="h3" marginTop={0} >
                                    From $380
                                </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard;
