import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import profile from "../../public/profile.png"

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-[2rem] shadow-2xl overflow-hidden w-[320px] md:w-[380px] flex flex-col items-center text-center"
    >
      {/* Top curved image section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden">
        <motion.img
          src={profile}
          alt="Profile"
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        {/* Gradient overlay curve */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent rounded-t-[3rem]"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <motion.h2
          className="text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Gourav
        </motion.h2>

        {/* Role */} 
        <motion.p
          className="text-pink-500 mb-4 text-lg font-medium"
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            color: ["#ec4899", "#d946ef", "#ec4899"],
          }}
          transition={{
            delay: 0.6,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          Backend Developer
        </motion.p>

        {/* Social icons */}
        <motion.div
          className="flex justify-center space-x-6 text-2xl text-gray-600 mb-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {[
            { icon: <FaTwitter />, link: "https://x.com/gouravgs1290" },
            { icon: <FaGithub />, link: "https://github.com/gaurav-acnt" },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/gaurav-jangra-b15764219/",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/gaurav_jangra.06/?next=%2F",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.3, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/about"
            className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full hover:bg-pink-50 hover:text-pink-500 transition"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full hover:bg-pink-50 hover:text-pink-500 transition"
          >
            My Projects
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-gray-100 text-sm font-medium rounded-full hover:bg-pink-50 hover:text-pink-500 transition"
          >
            Contact Me
          </Link>

           <a
            href="/Portfolio/gaurav_resume.pdf"
            download="Gourav_Resume.pdf"
            className="px-4 py-2 my-1 bg-pink-500 text-white text-sm font-medium rounded-full hover:bg-pink-600 transition"
          >
            Download Resume 📄
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
