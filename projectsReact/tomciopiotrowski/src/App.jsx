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
        <Route path="/" element={<Objects />} />
        <Route path="/" element={<People />} />
        <Route path="/" element={<Movie />} />
        <Route path="/" element={<About />} />
      </Routes>
      <GaleryStart />
    </Router>
  );
}

export default App;
