import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
