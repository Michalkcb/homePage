import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  return <ThemeProvider>
      <Navbar></Navbar>
    </ThemeProvider>;
}

export default App;
