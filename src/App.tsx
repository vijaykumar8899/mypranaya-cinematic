import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Imports
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Careers from "./Pages/Careers";
import FounderStory from "./Pages/FounderStory";
import Magzine from "./Pages/Magzine";
import Register from "./Pages/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />    
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/founderstory" element={<FounderStory />} />
        <Route path="/magzine" element={<Magzine />} />
        <Route path="/register" element={<Register/>} />
    
      </Routes>
    </Router>
  );
}

export default App;
