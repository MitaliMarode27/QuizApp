import {Route, Routes } from "react-router-dom";
import History from "./History";
import "./App.css";
import Bollywood from "./Bollywood";
import Api from "./Api";
import Sports from "./Sports";
import Science from "./science";
import Socialmedia from "./Socialmedia";
import Tradition from "./Tradition";
import Home from "./Home";
import Quiz from "./Quiz";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>} />
        <Route path="/science" element={<Science/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/sport" element={<Sports/>} />
        <Route path="/bollywood" element={<Bollywood/>} />
        <Route path="/social" element={<Socialmedia/>} />
        <Route path="/tradition" element={<Tradition/>} />
        <Route path="/api" element={<Api/>} />
      </Routes>
  );
};

export default App;