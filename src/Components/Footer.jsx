import { motion } from "framer-motion";
import { FiMail, FiGithub } from "react-icons/fi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SimpleFooter = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <FaFacebook size={18} />,
            url: "https://www.facebook.com/profile.php?id=61574895043508",
            name: "Facebook"
        },
        {
            icon: <FiMail size={18} />,
            url: "mailto:ishinidewamiththa@gmail.com",
            name: "Email"
        },
        {
            icon: <FaLinkedin size={18} />,
            url: "https://www.linkedin.com/in/ishini-dewamiththa-1699b1244/",
            name: "LinkedIn"
        },
        {
            icon: <FiGithub size={18} />,
            url: "https://github.com/IshiniCharindi",
            name: "GitHub"
        }
    ];

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border-t border-pink-100 py-6 px-4"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-gray-600 text-sm">
                        © {currentYear} Ishini Dewamiththa
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Built with love */}
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Built with passion <span className="text-pink-600">❤️</span>
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};

export default SimpleFooter;