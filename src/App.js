import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Notes from "./pages/Notes/Notes";
import Exercises from "./pages/Exercises/Exercise";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <div className="toRedesign">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:part" element={<Notes />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:part" element={<Exercises />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
