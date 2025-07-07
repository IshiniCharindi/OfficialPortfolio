import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FiUser, FiFileText, FiMail, FiMenu, FiX, FiGithub } from 'react-icons/fi';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
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
            icon: <FiUser size={20} className="text-gray-600 group-hover:text-pink-600" />
        },
        portfolio: {
            path: "/portfolio",
            title: "My Portfolio",
            icon: <FiFileText size={20} className="text-gray-600 group-hover:text-pink-600" />
        },
        services: {
            path: "/services",
            title: "My Services",
            icon: <FiUser size={20} className="text-gray-600 group-hover:text-pink-600" />
        },
        contact: {
            path: "/contact",
            title: "Contact Me",
            icon: <FiMail size={20} className="text-gray-600 group-hover:text-pink-600" />
        }
    };

    // Determine active section (exact match only)
    const activeSection = Object.keys(sections).find(key =>
        location.pathname === sections[key].path
    );

    // Handle navigation
    const navigateTo = (section) => {
        navigate(sections[section].path);
    };

    // Social icons data with actual links
    const socialIcons = [
        {
            icon: <FaFacebook size={18} />,
            name: 'facebook',
            url: 'https://www.facebook.com/profile.php?id=61574895043508'
        },
        {
            icon: <FiMail size={18} />,
            name: 'email',
            url: 'mailto:ishinidewamiththa@gmail.com'
        },
        {
            icon: <FaLinkedin size={18} />,
            name: 'linkedin',
            url: 'www.linkedin.com/in/ishini-dewamiththa-1699b1244'
        },
        {
            icon: <FiGithub size={18} />,
            name: 'github',
            url: 'https://github.com/IshiniCharindi'
        }
    ];

    return (
        <div className="flex h-screen bg-white overflow-hidden font-sans">
            {/* Sidebar */}
            <div className={`bg-white border-r border-gray-200 transition-all duration-300 ease-in-out 
                ${sidebarOpen ? 'w-72' : 'w-0'} flex flex-col fixed md:relative z-20 h-full overflow-hidden shadow-lg`}>

                {/* Sidebar Content */}
                {sidebarOpen && (
                    <>
                        <div className="flex flex-col items-center pt-8 px-6 relative">
                            {/* Close button (kept in top-right corner) */}
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-pink-600 transition-colors"
                            >
                                <FiX size={24} />
                            </button>

                            {/* Profile section */}
                            <img
                                src={image1}
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover border-2 border-pink-600 mb-4"
                            />
                            <h1 className="text-xl font-bold text-gray-800">Ishini Dewamiththa</h1>
                            <p className="text-gray-600 mb-6">Web Developer</p>
                            <div className="w-full border-t border-gray-200 mb-6"></div>
                        </div>

                        <nav className="flex-1 px-6 overflow-y-auto">
                            <ul className="space-y-2">
                                {Object.entries(sections).map(([key, { path, title, icon }]) => (
                                    <li key={key}>
                                        <button
                                            onClick={() => navigateTo(key)}
                                            className={`group w-full flex items-center p-3 rounded-lg transition-all duration-200
                                                ${activeSection === key
                                                ? 'bg-pink-100 text-pink-600'
                                                : 'text-gray-600 hover:bg-pink-100 hover:text-pink-600'
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
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full text-gray-600 hover:bg-pink-100 hover:text-pink-600 transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <button
                                onClick={()=>navigate('/contact')}
                                className="w-full flex items-center justify-center p-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg">
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
                    className="fixed top-6 left-6 z-30 p-3 bg-white text-pink-600 rounded-full shadow-lg hover:bg-pink-100 transition-colors"
                >
                    <FiMenu size={24} />
                </button>
            )}

            {/* Main Content */}
            <div className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
                <Outlet />
            </div>
        </div>
    );
};

export default PortfolioLayout;