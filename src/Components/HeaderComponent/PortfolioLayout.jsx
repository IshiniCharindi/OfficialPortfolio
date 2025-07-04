import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FiUser, FiFileText, FiMail, FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import image1 from "../../assets/ishini2.png";

const PortfolioLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Navigation configuration
    const sections = {
        home: {
            path: "/",
            title: "About Me",
            icon: <FiUser size={20} className="text-pink-700" />
        },
        portfolio: {
            path: "/portfolio",
            title: "My Portfolio",
            icon: <FiFileText size={20} className="text-pink-700" />
        },
        services: {
            path: "/services",
            title: "My Services",
            icon: <FiUser size={20} className="text-pink-700" />
        },
        contact: {
            path: "/contact",
            title: "Contact Me",
            icon: <FiMail size={20} className="text-pink-700" />
        }
    };

    // Determine active section
    const activeSection = Object.keys(sections).find(key =>
        location.pathname.startsWith(sections[key].path)
    ) || 'home';

    // Handle navigation
    const navigateTo = (section) => {
        navigate(sections[section].path);
    };

    // Social icons data
    const socialIcons = [
        { icon: <FaFacebook size={18} />, name: 'facebook' },
        { icon: <FaInstagram size={18} />, name: 'instagram' },
        { icon: <FaLinkedin size={18} />, name: 'linkedin' },
        { icon: <FiGithub size={18} />, name: 'github' }
    ];

    return (
        <div className="layout flex h-screen bg-white overflow-hidden font-sans">
            {/* Sidebar */}
            <div className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out 
                ${sidebarOpen ? 'w-80' : 'w-0'} flex flex-col fixed md:relative z-20 h-full overflow-hidden shadow-lg`}>

                {/* Sidebar Content */}
                {sidebarOpen && (
                    <>
                        <div className="p-6 flex items-center justify-between border-b border-gray-200">
                            <div className="flex items-center space-x-3">
                                <img
                                    src={image1}
                                    alt="Profile"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-pink-700"
                                />
                                <h1 className="text-xl font-bold text-gray-800">Ishini Charindi</h1>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-gray-500 hover:text-pink-700 transition-colors"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 p-4 overflow-y-auto">
                            <ul className="space-y-3">
                                {Object.entries(sections).map(([key, { path, title, icon }]) => (
                                    <li key={key}>
                                        <button
                                            onClick={() => navigateTo(key)}
                                            className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                                                ${activeSection === key
                                                ? 'bg-pink-700 text-white shadow-md'
                                                : 'text-gray-600 hover:bg-pink-100 hover:text-pink-700'
                                            }`}
                                        >
                                            <span className="mr-3">{icon}</span>
                                            <span className="font-medium">{title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-6 border-t border-gray-200 mt-auto">
                            <div className="flex justify-center space-x-4 mb-6">
                                {socialIcons.map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="p-2 rounded-full text-gray-600 hover:bg-pink-100 hover:text-pink-700 transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <button className="w-full flex items-center justify-center p-3 rounded-lg bg-pink-700 text-white font-medium hover:bg-pink-800 transition-colors shadow-md hover:shadow-lg">
                                <FiMail className="mr-2" size={18} />
                                Hire Me
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Sidebar Toggle Button */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="fixed top-6 left-6 z-30 p-3 bg-white text-pink-700 rounded-full shadow-lg hover:bg-pink-100 transition-colors"
                >
                    <FiMenu size={24} />
                </button>
            )}

            {/* Main Content */}

                <main className="main w-full">
                    <Outlet />
                </main>

        </div>
    );
};

export default PortfolioLayout;