import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage";
import AboutUs from "./components/AboutUs";
import Solutions from "./components/Solutions";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
