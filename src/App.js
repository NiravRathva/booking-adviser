import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from "./Pages/Home/Home"
import HotelsList from "./Pages/Hotels/HotelsList"
import Hotel from "./Pages/Hotel/Hotel"
function App() {
  return (
    <>
    <Router>
    
      <Routes>
      <Route path="/" element={<Home/>} />      
      </Routes>
      <Routes>
      <Route path="/hotels" element={<HotelsList/>} />      
      </Routes>
      <Routes>
      <Route path="/hotel/:id" element={<Hotel/>} />      
      </Routes>
    </Router>
    </>
  );
}

export default App;
