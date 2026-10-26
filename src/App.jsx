import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
