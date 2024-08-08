import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer, Home } from "./components/utilities";
import { Notes, Exercises } from "./pages";

const App = () => {
  return (
    <div style={{ padding: "5px" }}>
      <div style={{ marginBottom: "10px" }}>
        <NavBar />
      </div>
      <div className="toRedesign">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/notes/:part" element={<Notes />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:part" element={<Exercises />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
