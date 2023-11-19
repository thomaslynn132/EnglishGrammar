// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Notes from "./pages/Notes/Notes";
import Exercises from "./pages/Exercises/Exercise";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Exercises" element={<Exercises />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
