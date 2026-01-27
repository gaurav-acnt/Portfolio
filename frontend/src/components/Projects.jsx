import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import passwordgenerator from "../../public/projects/password-generator.png"
import tictactoe from "../../public/projects/tic-tac-toe.png"
import rps from "../../public/projects/rps.png"
import qrcode from "../../public/projects/qr-code-generator.png"
import weatherapp from "../../public/projects/weather-app.png"
import gemini from "../../public/projects/gemini-clone.png"



const projectsData = [
  {
    id: 1,
    title: "Password Generator",
    description: "Generate strong and random passwords easily.",
    image: passwordgenerator,
    category: "Frontend",
    demoLink: "https://password-generator-zeta-flax.vercel.app/",
    githubLink: "https://github.com/gaurav-acnt/Password-Generator",
  },
  {
    id: 2,
    title: "Tic-Tac-Toe",
    description: "Classic 2-player game implemented in JavaScript.",
    image: tictactoe,
    category: "Games",
    demoLink: "https://tic-tac-toe-two-umber.vercel.app/",
    githubLink: "https://github.com/gaurav-acnt/Tic-Tac-Toe",
  },
  {
    id: 3,
    title: "Rock, Paper, Scissors",
    description: "Play the classic RPS game against the computer.",
    image: rps,
    category: "Games",
    demoLink: "https://rock-paper-scissor-blush-three.vercel.app/",
    githubLink: "https://github.com/gaurav-acnt/Rock-Paper-Scissor",
  },
  {
    id: 4,
    title: "QR Code Generator",
    description: "Generate QR codes for any text or URL.",
    image: qrcode,
    category: "Frontend",
    demoLink: "https://qr-code-generator-two-bice.vercel.app/",
    githubLink: "https://github.com/gaurav-acnt/QR-code-generator",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Check weather forecast for any city.",
    image: weatherapp,
    category: "Website",
    demoLink: "https://gemini-clone-yourname.vercel.app",
    githubLink: "https://github.com/gaurav-acnt/Weather-App",
  },
  {
    id: 6,
    title: "Gemini Clone",
    description: "A clone of Gemini website for practice.",
    image: gemini,
    category: "Website",
    demoLink: "https://razorpay-clone-yourname.vercel.app",
    githubLink: "https://github.com/yourname/razorpay-clone",
  },
];

const filterOptions = ["All", "Frontend", "Games", "Website"];

const Projects = () => {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

            
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 w-full md:w-[70%] mx-auto mt-10 border border-gray-100">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        <span className="text-pink-500">Recent</span> Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`${
              selected === opt
                ? "text-pink-500 border-b-2 border-pink-500"
                : "hover:text-pink-400"
            } pb-1 transition-colors duration-200`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05 }}
              layout
            >
              
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-52 object-cover"
              />

              {/* Details */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{proj.category}</p>
                <p className="text-gray-600 text-sm mb-3">{proj.description}</p>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-400 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;





