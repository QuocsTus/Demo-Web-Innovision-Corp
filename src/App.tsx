import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Solutions from "./components/SolutionsPage";
import AISolution from "./components/Solutions-Page/solution1";
import IndustrialAIDetail from "./components/Solutions-Page/solution2";
import SoftwareDevelopment from "./components/Solutions-Page/solution3";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/solutions/ai-products" element={<AISolution />} />
          <Route
            path="/solutions/industrial-ai-automation"
            element={<IndustrialAIDetail />}
          />
          <Route
            path="/solutions/software-development"
            element={<SoftwareDevelopment />}
          />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
