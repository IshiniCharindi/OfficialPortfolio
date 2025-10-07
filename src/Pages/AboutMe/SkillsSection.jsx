import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { useNavigate } from "react-router-dom";

const SkillsSection = () => {
  const navigate = useNavigate();
  const skills = [
    {
      icon: "https://img.icons8.com/plasticine/100/react.png",
      title: "React",
      description:
        "Building dynamic, reusable components and high-performance user interfaces.",
    },
    {
      icon: "https://img.icons8.com/fluency/48/node-js.png",
      title: "Node.js",
      description:
        "JavaScript runtime for building fast, scalable server-side applications.",
    },
    {
      icon: "https://img.icons8.com/color/48/python--v1.png",
      title: "Python & Django",
      description:
        "Versatile language with powerful framework for secure web applications.",
    },
    {
      icon: "https://img.icons8.com/color/48/spring-logo.png",
      title: "Spring Boot",
      description:
        "Java framework for robust, production-ready backend applications.",
    },
    {
      icon: "https://img.icons8.com/dusk/64/php-logo.png",
      title: "PHP",
      description:
        "Scripting language for dynamic web applications and server-side scripting.",
    },
    {
      icon: "https://img.icons8.com/color/48/mongo-db.png",
      title: "MongoDB",
      description: "NoSQL database for flexible, JSON-like document storage.",
    },
    {
      icon: "https://img.icons8.com/color/48/mysql-logo.png",
      title: "MySQL",
      description:
        "Reliable RDBMS for managing structured data with SQL queries.",
    },
    {
      icon: "https://img.icons8.com/color/48/nextjs.png",
      title: "Next.js",
      description:
          "React framework for building fast, SEO-friendly, and scalable web applications with server-side rendering.",
    },

  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            My Technical Skills
          </motion.h2>
          <motion.p
            variants={item}
            className="max-w-2xl mx-auto text-lg text-gray-600"
          >
            I specialize in modern web technologies that help build fast,
            scalable, and user-friendly applications.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => navigate("/services")}
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition duration-300"
            whileHover="hover"
            whileTap="tap"
          >
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
