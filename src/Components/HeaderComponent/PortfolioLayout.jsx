import { useState } from 'react';
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FiUser, FiFileText, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import image1 from "../../../public/ishini2.png";

const PortfolioLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Navigation configuration
    const sections = {
        home: {
            path: "/",
            title: "About Me",
            icon: <FiUser size={18} />
        },
        portfolio: {
            path: "/portfolio",
            title: "My Portfolio",
            icon: <FiFileText size={18} />
        },
        services: {
            path: "/services",
            title: "My Services",
            icon: <FiUser size={18} />
        },
        contact: {
            path: "/contact",
            title: "Contact Me",
            icon: <FiMail size={18} />
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
        { icon: <FaGithub size={18} />, name: 'github' }
    ];

    return (
        <div className="flex h-screen bg-red-400 overflow-hidden">
            {/* Sidebar - Now properly collapses */}
            <div className={`bg-blue-800 text-[var(--color-text)] transition-all duration-300 ease-in-out 
                ${sidebarOpen ? 'w-64' : 'w-0'} flex flex-col fixed md:relative z-10 h-full overflow-hidden`}>

                {/* Sidebar Content - Only shown when sidebar is open */}
                {sidebarOpen && (
                    <>
                        <div className="p-4 flex items-center justify-between border-b border-[var(--color-accent)]">
                            <div className="flex items-center">
                                <img
                                    src={image1}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full mr-2"
                                />
                                <h1 className="text-xl font-bold">Ishini Charindi</h1>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="hover:cursor-pointer text-[var(--color-text)] hover:text-[var(--color-text2)]"
                            >
                                <FiX size={24} />
                            </button>
                        </div>

                        <nav className="flex-1 p-4 overflow-y-auto">
                            <ul className="space-y-2">
                                {Object.entries(sections).map(([key, { path, title, icon }]) => (
                                    <li key={key}>
                                        <button
                                            onClick={() => navigateTo(key)}
                                            className={`hover:cursor-pointer flex items-center w-full p-3 rounded-lg transition-colors 
                                                ${activeSection === key ? 'bg-[var(--color-accent)] text-[var(--color-primary)]' : 'hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)]'}`}
                                        >
                                            <span className="mr-3 min-w-[20px]">{icon}</span>
                                            <span className="truncate">{title}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="p-4 border-t border-[var(--color-accent)] mt-auto">
                            <div className="flex justify-around mb-4">
                                {socialIcons.map((social) => (
                                    <a
                                        key={social.name}
                                        href="#"
                                        className="p-2 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <button className="hover:cursor-pointer flex items-center justify-center w-full p-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary)] font-medium">
                                Hire Me
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Sidebar Toggle Button - Always visible when sidebar is closed */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="fixed top-4 left-4 z-20 p-2 bg-[var(--color-primary)] text-[var(--color-text)] rounded-md shadow-md hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors"
                >
                    <FiMenu size={24} />
                </button>
            )}

            {/* Main Content - Removed top bar */}
            <div className={`flex-1 overflow-auto transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} md:ml-0`}>
                <main className="p-4 md:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default PortfolioLayout;