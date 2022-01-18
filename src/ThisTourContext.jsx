import React, { ReactNode, useContext, useState} from "react";


const defaultTour = {}

export const thisTourContext = React.createContext(defaultTour);


// {
//     "id": 2,
//     "name": "Helicopter Over the Falls",
//     "duration": 8,
//     "rating": 3.5,
//     "numberOfReviews": 641,
//     "price": 385,
//     "image": "https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg"
//   },

export const ThisTourContextProvider = ({children}) => {

    const [thisTour, setThisTour] = useState({});

    const setTour = (tour) => {
        console.log(tour);
        console.log("Pre Set Change", thisTour);
        setThisTour(tour);
        console.log(tour);
        console.log("Post Set Change", thisTour);
    }

    return (
       <ThisProfileContext.Provider value={{thisTour, setTour}}>
       </ThisProfileContext.Provider>
    )
}


