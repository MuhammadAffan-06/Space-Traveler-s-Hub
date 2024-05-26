import './App.css';
import { Link, BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Rockets from './Components/Rockets';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rockets />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
