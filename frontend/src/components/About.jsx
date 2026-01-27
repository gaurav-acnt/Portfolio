
import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaPython
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFigma, SiCanva } from "react-icons/si";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white to-pink-50 shadow-2xl rounded-3xl p-10 w-full md:w-[70%] mx-auto mt-10 border border-gray-100">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-600">
          About Me
        </span>
      </h2>

      {/* Main content */}
      <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
        👋 Hey there! I’m{" "}
        <span className="font-bold text-pink-600">Gourav </span>, a passionate{" "}
        <span className="font-semibold text-indigo-600">Backend Developer</span>{" "}
        from India 🇮🇳. I love building responsive, interactive, and visually
        appealing web experiences that combine creativity with functionality.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center">
        My focus is on writing clean, maintainable code and designing user
        interfaces that feel intuitive and delightful. I’m always learning,
        exploring, and improving my craft to stay ahead in the fast-paced world
        of web development.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed text-center mb-6">
        🚀 My goal is to create digital experiences that not only look great but
        also make people’s lives easier and more enjoyable.
      </p>

      {/* Skills Section */}
      <h3 className="text-2xl font-bold text-gray-800 text-center mt-8 mb-4">
        Skills 🚀
      </h3>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {/* Frontend */}
        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaHtml5 className="text-orange-500 text-xl" />
          <span className="font-medium text-gray-700">HTML5</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaCss3Alt className="text-blue-500 text-xl" />
          <span className="font-medium text-gray-700">CSS3</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <SiTailwindcss className="text-sky-400 text-xl" />
          <span className="font-medium text-gray-700">Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaJsSquare className="text-yellow-400 text-xl" />
          <span className="font-medium text-gray-700">JavaScript</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaPython className="text-blue-600 text-xl" />
          <span className="font-medium text-gray-700">Python</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaReact className="text-blue-400 text-xl" />
          <span className="font-medium text-gray-700">React</span>
        </div>

        {/* Backend */}
        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaNodeJs className="text-green-600 text-xl" />
          <span className="font-medium text-gray-700">Node.js</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <SiExpress className="text-gray-800 text-xl" />
          <span className="font-medium text-gray-700">Express.js</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <SiMongodb className="text-green-500 text-xl" />
          <span className="font-medium text-gray-700">MongoDB</span>
        </div>

        {/* Tools */}
        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <FaGitAlt className="text-orange-600 text-xl" />
          <span className="font-medium text-gray-700">Git</span>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
          <SiFigma  className="text-orange-500 text-xl" />
          <span className="font-medium text-gray-700">Figma</span>
        </div>

          <div className="flex items-center gap-2 bg-white shadow-md px-4 py-2 rounded-full border border-pink-100 hover:scale-105 transition-transform duration-200">
            <SiCanva className="text-blue-500 text-xl" />
            <span className="font-medium text-gray-700">Canva</span>
        </div>
      </div>

      {/* Quote */}
      <p className="text-center text-gray-500 mt-8 italic">
        “Turning ideas into smooth, interactive, and scalable web experiences.”
      </p>
    </div>
  );
};

export default About;
