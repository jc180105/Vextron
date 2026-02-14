import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/solucoes" element={<SolutionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
