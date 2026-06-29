import React from "react";
import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";

// Import Code For Pages </>
import Home from './Pages/1-Home/index';
import Meetings from './Pages/2-Meetings/index';
import OnlineTeaching from "./Pages/3-OnlineTeaching/index";

// Import Code For Components </>
import Navbar from './Components/2-Navbar/index';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Meetings" element={<Meetings />} />
        <Route path="/OnlineTeaching" element={<OnlineTeaching />} />
      </Routes>
    </>
  );
}

export default App;
