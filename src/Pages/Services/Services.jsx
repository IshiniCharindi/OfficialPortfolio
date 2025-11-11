import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import service1 from "../../assets/service1.jpg";
import Footer from "../../Components/Footer.jsx";

const Services = () => {
  const navigate = useNavigate();

  const handlePackageSelect = (packageName, packagePrice, features) => {
    navigate("/contact", {
      state: {
        selectedPackage: packageName,
        packagePrice: packagePrice,
        features: features,
        message: `I'm interested in the ${packageName} package ($${packagePrice}). Features I need:\n${features.join("\n")}\n\nPlease contact me to discuss further.`,
      },
    });
  };

  const basicFeatures = [
    "Functional Website",
    "1 page",
    "Content Upload",
    "5-Day Delivery",
    "1 Revision",
  ];

  const standardFeatures = [
    "Functional Website",
    "5 pages",
    "Content Upload",
    "10-Day Delivery",
    "2 Revisions",
  ];

  const premiumFeatures = [
    "Functional Website",
    "10 pages",
    "Content Upload",
    "21-Day Delivery",
    "3 Revisions",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="services">
      <div className="col-span-4">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-8 px-4 bg-[#fdfdfd] sm:py-12 lg:py-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-tight text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Services & Pricing
            </motion.h2>
            <motion.p
              className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-600 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I have 5+ years of development experience building software for
              the web and mobile devices. You can take a look at my online
              resume and project portfolio to find out more about my skills and
              experiences.
            </motion.p>
            <motion.div
              className="flex justify-center mb-3 mt-4 sm:mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={() => navigate("/contact")}
                className="flex items-center px-4 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-pink-700 border border-transparent rounded-3xl hover:bg-pink-800"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
                Hire Me
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Packages Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="py-8 px-4 -mt-8 sm:-mt-12 bg-white sm:py-12 lg:py-16 relative"
          style={{
            backgroundImage: `url(${service1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 z-0"></div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-black">
                Service Packages
              </h2>
              <p className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
                Explore the range of services I provide to help bring your
                projects to life. From initial concept to final delivery, I am
                committed to delivering high-quality results tailored to your
                needs.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:grid-cols-2 lg:grid-cols-3 lg:max-w-full lg:mt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Basic Package */}
              <motion.div
                className="overflow-hidden bg-white border-2 border-gray-100 rounded-md"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 sm:p-8 xl:px-10">
                  <h3 className="text-lg sm:text-xl font-bold text-pink-700">
                    Basic
                  </h3>
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold text-black mt-4 sm:mt-6"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    $80
                  </motion.p>
                  <h3 className="mt-2 sm:mt-3 text-base font-bold text-black-600">
                    Starter Website
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                    A simple, one-page static website for showcasing your
                    business or personal brand.
                  </p>
                  <ul className="flex flex-col items-start space-y-3 sm:space-y-4 text-left mt-6 sm:mt-8">
                    {basicFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-pink-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base font-medium text-gray-900">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() =>
                      handlePackageSelect("Basic", 80, basicFeatures)
                    }
                    className="w-full mt-6 sm:mt-8 px-4 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-pink-700 rounded-3xl hover:opacity-80 focus:opacity-80"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Choose Basic
                  </motion.button>
                </div>
              </motion.div>

              {/* Standard Package */}
              <motion.div
                className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 sm:p-8 xl:px-10">
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600">
                    Standard
                  </h3>
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold text-black mt-4 sm:mt-6"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    $200
                  </motion.p>
                  <h3 className="mt-2 sm:mt-3 text-base font-bold text-black-600">
                    Multi-Page Website
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                    A professional multi-page website for businesses or personal
                    portfolios.
                  </p>
                  <ul className="flex flex-col items-start space-y-3 sm:space-y-4 text-left mt-6 sm:mt-8">
                    {standardFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.1 }}
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-pink-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base font-medium text-gray-900">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() =>
                      handlePackageSelect("Standard", 200, standardFeatures)
                    }
                    className="w-full mt-6 sm:mt-8 px-4 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-200 rounded-3xl bg-pink-700 hover:opacity-80 focus:opacity-80"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Choose Standard
                  </motion.button>
                </div>
              </motion.div>

              {/* Premium Package */}
              <motion.div
                className="overflow-hidden bg-white border-2 border-gray-100 rounded-md md:col-span-2 lg:col-span-1"
                variants={cardVariants}
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 sm:p-8 xl:px-10">
                  <h3 className="text-lg sm:text-xl font-bold text-pink-700">
                    Premium
                  </h3>
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold text-black mt-4 sm:mt-6"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                  >
                    $350
                  </motion.p>
                  <h3 className="mt-2 sm:mt-3 text-base font-bold text-black-600">
                    Full-Featured Dynamic Website
                  </h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600">
                    A fully customized, dynamic website tailored to your
                    business or project needs.
                  </p>
                  <ul className="flex flex-col items-start space-y-3 sm:space-y-4 text-left mt-6 sm:mt-8">
                    {premiumFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index + 0.2 }}
                      >
                        <svg
                          className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-pink-700"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm sm:text-base font-medium text-gray-900">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() =>
                      handlePackageSelect("Premium", 350, premiumFeatures)
                    }
                    className="w-full mt-6 sm:mt-8 px-4 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-pink-700 rounded-3xl hover:opacity-80 focus:opacity-80"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Choose Premium
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Custom Package Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="py-8 px-4 bg-[#fdfdfd] sm:py-12 lg:py-16"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-tight text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              Want to hire me for custom package?
            </motion.h2>
            <motion.p
              className="mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-600 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              I offer flexible custom packages designed to meet your unique
              needs. Unlike pre-arranged options, custom packages let you choose
              specific features and services that fit your vision. Let's work
              together to create something perfect for you!
            </motion.p>
            <motion.div
              className="flex justify-center mt-4 sm:mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <motion.button
                onClick={() => navigate("/contact")}
                className="flex items-center px-4 py-2 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-pink-700 border border-transparent rounded-3xl hover:bg-pink-800"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-send mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                </svg>
                Hire Me
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;
