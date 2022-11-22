import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Coursework from "./pages/Coursework";
import Research from "./pages/Research";
import Projects from "./pages/Projects";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
