import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Certifications from "./Components/Certification";
import Experience from "./Components/Experience";
import Impact from "./Components/Volunteerships";

import Login from "../admin-panel/src/Pages/Login";
import Dashboard from "../admin-panel/src/Pages/Dashboard";
import ProtectedRoute from "../admin-panel/src/Pages/Protectedroutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Certifications />
              <Projects />
              <Experience />
              <Impact />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;