
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackgroundShapes from "./components/BackgroundShapes";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#f9fafc] overflow-hidden flex items-start justify-center pt-10 px-4 sm:px-6 md:px-10">
        <BackgroundShapes />

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8 z-10 w-full max-w-[1200px]">
          {/* ProfileCard + Sidebar container */}
          <div className="relative flex items-start w-full md:w-auto">
            
            <div className="absolute left-0 top-0 hidden md:block">
              <Sidebar />
            </div>

            {/* Profile Card */}
            <div className="ml-0 md:ml-20 bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full sm:w-[300px] md:w-[380px]">
              <ProfileCard />
            </div>
          </div>

          {/* Right About/Projects/Contact area */}
          <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full sm:w-[320px] md:w-[700px] h-[70vh] sm:h-[80vh] md:h-[90vh] p-4 sm:p-6 md:p-8 text-gray-700 overflow-y-auto custom-scrollbar">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

