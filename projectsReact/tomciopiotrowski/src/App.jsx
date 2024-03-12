import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GaleryStart from "./routes/GaleryStart";
import About from "./routes/About";
import Objects from "./routes/Objects";
import Movie from "./routes/Movie";
import People from "./routes/People";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GaleryStart />} />
        <Route path="/about" element={<About />} />
        <Route path="/objects" element={<Objects />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/people" element={<People />} />
      </Routes>
      <GaleryStart />
    </Router>
  );
}

export default App;
