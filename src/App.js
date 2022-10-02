import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import StarshipDetails from './pages/StarshipDetails';
import Starships from './pages/Starships';
import './App.css';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BrowserRouter >
      <Navbar />


      {/* route structure created for the page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starship/:id" element={<StarshipDetails />} />
        <Route path='/starships' element={<Starships />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

    </BrowserRouter>
  );
}
export default App;