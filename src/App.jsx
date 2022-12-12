import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Subscribe from "./Subscribe/Subscribe";

function App() {
  return (
    <div className="bg-[#F7F8FB] overflow-x-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sub" element={<Subscribe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
