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
      icon: "https://img.icons8.com/color/48/postgreesql.png",
      title: "PostgreSQL",
      description:
          "Advanced open-source relational database with strong data integrity and SQL compliance.",
    },
    {
      icon: "https://img.icons8.com/color/48/nextjs.png",
      title: "Next.js",
      description:
          "React framework for building fast, SEO-friendly, and scalable web applications with server-side rendering.",
    },
    {
      icon: "https://img.icons8.com/color/48/nestjs.png",
      title: "NestJS",
      description:
          "Progressive Node.js framework for building efficient and scalable backend applications.",
    },
    {
      icon: "https://img.icons8.com/color/48/react-native.png",
      title: "React Native",
      description:
          "Framework for building cross-platform mobile apps using JavaScript and React.",
    },

    {
      icon: "https://img.icons8.com/color/48/flutter.png",
      title: "Flutter",
      description:
          "UI toolkit by Google for building beautiful, natively compiled mobile, web, and desktop applications from a single codebase.",
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

      </div>
    </section>
  );
};

export default SkillsSection;
