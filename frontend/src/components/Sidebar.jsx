

import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const menuItems = [
    { id: "About", icon: <FaUser />, path: "/about" },
    { id: "Projects", icon: <FaProjectDiagram />, path: "/projects" },
    { id: "Contact", icon: <FaEnvelope />, path: "/contact" },
  ];

  return (
    <div className="left-0 top-0 h-screen w-16 flex flex-col items-center py-6 relative">
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === "/"}  
          title={item.id}
          className="relative w-full h-12 mb-6 flex items-center justify-center"
        >
          {({ isActive }) => (
            <div className="relative w-full h-12 flex items-center justify-center">
              
             
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute left-0 top-0 w-full h-12 bg-pink-100 rounded-r-xl z-0"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Icon */}
              <motion.div
                className={`relative z-10 text-2xl transition-colors ${
                  isActive ? "text-pink-500" : "text-gray-500 hover:text-pink-500"
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.div>
            </div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;

