import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Favorite from "./components/Favorite";
import Description from './components/Description';
import Navigation from "./components/ui/Navigation";

import { PeopleProvider } from "./components/context/PeopleProvider";


function App() {
  return (
    <PeopleProvider>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/description" element={<Description />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </PeopleProvider>
  )
}

export default App
