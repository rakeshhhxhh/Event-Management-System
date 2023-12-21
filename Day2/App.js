import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import LoginSignup from "./Components/LoginSignup";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MediaCard from "./Components/MediaCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/LoginSignup" element={<LoginSignup/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/MediaCard" element={<MediaCard />} />
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
