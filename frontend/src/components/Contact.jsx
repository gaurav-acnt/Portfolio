

import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return toast.warn("🧑 Please enter your name!");
    if (!formData.email.trim()) return toast.warn("📧 Please enter your email!");
    if (!formData.message.trim())
      return toast.warn("💬 Please enter your message!");

    try {
      setLoading(true);
      console.log("BASE_URL:", BASE_URL);
      const res = await axios.post(`${BASE_URL}/api/v1/contact`, formData,
        {withCredentials:true}
      );

      if (res.data.success) {
        toast.success(" Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Something went wrong!");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 mt-10">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side */}
        <div className="flex-1 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-black bg-opacity-30 backdrop-blur-md">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center md:text-left">
            Let's Connect 💬
          </h2>

          <p className="text-gray-200 mb-5 sm:mb-6 text-sm sm:text-base text-center md:text-left">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-center md:text-left">
            <p>
              <span className="font-semibold text-white">📧 Email:</span>{" "}
              gouravgs.1290@gmail.com
            </p>

            <p>
              <a
                href="https://www.linkedin.com/in/gaurav-jangra-b15764219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400"
              >
                🔗 LinkedIn
              </a>
            </p>

            <p>
              <span className="font-semibold text-white">📍 Location:</span> New
              Delhi, India
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-5 mt-6 text-2xl">
            <a
              href="https://x.com/gouravgs1290"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 hover:scale-110 transition-transform"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.instagram.com/gaurav_jangra.06"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 bg-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-5 sm:mb-6 text-center">
            Send Me a Message ✉️
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 sm:p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`text-white font-semibold py-3 sm:py-4 rounded-xl transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

