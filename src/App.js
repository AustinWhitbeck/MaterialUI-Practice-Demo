import './App.css';
// Custom Components
import TourCard from './Components/TourCard';

// Material UI imports
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
         <Grid container spacing={5}>
           <TourCard />
           <TourCard />
           <TourCard />
           <TourCard />
         </Grid>

      </Container>
    </div>
  );
}

export default App;
