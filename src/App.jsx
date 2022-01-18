import './App.css';
// Custom Components
import MyAppBar from './Components/MyAppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';


//  Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <MyAppBar/>
        <Routes>
        
          <Route path="/" element={ <Home />} exact/>
          <Route path="/:id" element={ <Tour />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
