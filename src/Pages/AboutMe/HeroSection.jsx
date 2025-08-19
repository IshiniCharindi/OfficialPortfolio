import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image2 from "../../assets/ishini1.png";
import bg2 from "../../assets/bg2.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center bg-gray-100"
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0  z-0"></div>

      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10 py-16 md:py-20">
        <div className="grid items-center grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-1 sm:mb-2"
            >
              Hey, I am
            </motion.h2>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl text-black font-bold leading-tight mb-4 sm:mb-6"
            >
              Ishini Dewamiththa
            </motion.h1>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-pink-700 font-semibold mb-6 sm:mb-8"
            >
              Web Developer & Designer
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-lg mx-auto md:mx-0 text-base sm:text-lg leading-relaxed text-gray-500 mb-8 sm:mb-10"
            >
              A dedicated professional from Sri Lanka committed to delivering
              exceptional web solutions tailored to your specific needs with
              creativity and technical excellence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-white transition-all duration-300 bg-pink-600 border border-transparent rounded-full hover:bg-pink-700 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-card-list mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                </svg>
                View Resume
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-base md:text-lg font-semibold text-pink-600 transition-all duration-300 bg-white border border-pink-600 rounded-full hover:bg-pink-50 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chat-left-text mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-auto rounded-lg shadow-2xl border-4 border-white transform transition duration-500"
                src={image2}
                alt="Ishini Dewamiththa"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-pink-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg text-sm sm:text-base"
              >
                <span className="font-bold">5+ Years</span> Experience
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
