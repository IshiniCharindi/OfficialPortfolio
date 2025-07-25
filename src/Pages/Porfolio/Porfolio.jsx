import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import sf1 from '../../assets/projects/sarawana flora 1.png';
import sf2 from '../../assets/projects/sarawana flora 2.png';
import sf3 from '../../assets/projects/sarawana flora 3.png';
import mi1 from '../../assets/projects/mas impex 1.png';
import mi2 from '../../assets/projects/mas impex 2.png';
import mi3 from '../../assets/projects/mas impex 3.png';
import gc1 from '../../assets/projects/G capital 1.png';
import gc2 from '../../assets/projects/G capital 2.png';
import gc3 from '../../assets/projects/G capital 3.png';
import sd1 from '../../assets/projects/softdetroits 1.png';
import sd2 from '../../assets/projects/softdetroits 2.png';
import sd3 from '../../assets/projects/softdetroits 3.png';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0 }
};

const viewToggleVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
};

const paginationVariants = {
    hover: { backgroundColor: "rgba(236, 72, 153, 0.2)" },
    tap: { scale: 0.95 }
};

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            title: "Saravana Flora",
            description: "Saravana Flora’s new website is a modern, user-friendly platform designed for flower enthusiasts to browse, order, and manage floral products effortlessly.",
            technologies: ["React","Tailwind CSS" ,"Node.js","Express.js", "MySQL"],
            images: [
                sf1,sf2,sf3
            ],
            demoLink: "https://saravanaflora.lk/",
            githubLink: "https://github.com/IshiniCharindi/sarawannaFlora",
        },
        {
            id: 2,
            title: "Mas Impex (PVT) lTD",
            description: "MAS Impex Pvt Ltd’s new website is a sleek, professional platform that showcases their global import-export services, making it easy for partners to explore, connect, and collaborate with confidence.",
            technologies: ["React","Tailwind CSS" ,"Node.js","Express.js", "Mongo DB"],
            images: [
                mi1,mi2,mi3
            ],
            demoLink: "https://masimpex.lk/",
            githubLink: "https://github.com/sachinduKavi/Mas-Imepx-Official",
        },
        {
            id: 3,
            title: "G capital Trading",
            description: "Designed and developed a modern, responsive website for G Capital Trading FZE, a UAE-based exporter, to strengthen their global presence and highlight their commitment to streamlining international trade.",
            technologies: ["React","Tailwind CSS" ,"Node.js","Express.js"],
            images: [
                gc1,gc2,gc3
            ],
            demoLink: "https://gcapitaltrading.com/",
            githubLink: "https://github.com/Sajan-Hirusha/GCapital",
        },
        {
            id: 4,
            title: "Soft Detroits",
            description: "Proudly designed and developed the official website for our first-ever startup, SoftDetroits Pvt Ltd — a bold step into the world of digital innovation and smart tech solutions.",
            technologies: ["React","Tailwind CSS" ,"Node.js","Express.js"],
            images: [
                sd1,sd2,sd3
            ],
            demoLink: "https://softdetroits.com/",
            githubLink: "https://github.com/IshiniCharindi/SoftDetriots",
        },

    ];


    const [isGridView, setIsGridView] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentImageIndices, setCurrentImageIndices] = useState({});
    const [pausedSlides, setPausedSlides] = useState({});
    const projectsPerPage = 3;

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const nextImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        setCurrentImageIndices(prev => ({
            ...prev,
            [projectId]: (prev[projectId] || 0) >= project.images.length - 1 ? 0 : (prev[projectId] || 0) + 1
        }));
    };

    const prevImage = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        setCurrentImageIndices(prev => ({
            ...prev,
            [projectId]: (prev[projectId] || 0) <= 0 ? project.images.length - 1 : (prev[projectId] || 0) - 1
        }));
    };

    useEffect(() => {
        const multiImageProjects = projects.filter(p => p.images.length > 1);
        if (multiImageProjects.length === 0) return;

        const intervalIds = multiImageProjects.map(project => {
            return setInterval(() => {
                if (!pausedSlides[project.id]) {
                    setCurrentImageIndices(prev => ({
                        ...prev,
                        [project.id]: (prev[project.id] || 0) >= project.images.length - 1 ? 0 : (prev[project.id] || 0) + 1
                    }));
                }
            }, 3000);
        });

        return () => {
            intervalIds.forEach(id => clearInterval(id));
        };
    }, [projects, pausedSlides]);

    const handleMouseEnter = (projectId) => {
        setPausedSlides(prev => ({ ...prev, [projectId]: true }));
    };

    const handleMouseLeave = (projectId) => {
        setPausedSlides(prev => ({ ...prev, [projectId]: false }));
    };

    const ListViewImageSlider = ({ project }) => {
        if (project.images.length <= 1) {
            return (
                <div className="relative w-full h-48 md:w-1/3 md:h-auto">
                    <motion.img
                        className="object-cover w-full h-full"
                        src={project.images[0]}
                        alt={project.title}
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-transparent md:bg-gradient-to-r md:from-pink-900/70 md:to-transparent"></div>
                </div>
            );
        }

        return (
            <div
                className="relative w-full h-48 md:w-1/3 md:h-auto group"
                onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={() => handleMouseLeave(project.id)}
            >
                <AnimatePresence initial={false} custom={currentImageIndices[project.id]}>
                    <motion.img
                        key={currentImageIndices[project.id] || 0}
                        className="absolute object-cover w-full h-full"
                        src={project.images[currentImageIndices[project.id] || 0]}
                        alt={`${project.title} screenshot ${(currentImageIndices[project.id] || 0) + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-transparent md:bg-gradient-to-r md:from-pink-900/70 md:to-transparent"></div>

                <motion.button
                    onClick={(e) => {
                        e.stopPropagation();
                        prevImage(project.id);
                    }}
                    className="absolute left-0 flex items-center justify-center w-8 h-8 ml-2 text-white transition-opacity duration-300 transform -translate-y-1/2 bg-black rounded-full opacity-0 top-1/2 bg-opacity-30 group-hover:opacity-100 hover:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                    onClick={(e) => {
                        e.stopPropagation();
                        nextImage(project.id);
                    }}
                    className="absolute right-0 flex items-center justify-center w-8 h-8 mr-2 text-white transition-opacity duration-300 transform -translate-y-1/2 bg-black rounded-full opacity-0 top-1/2 bg-opacity-30 group-hover:opacity-100 hover:bg-opacity-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiChevronRight className="w-5 h-5" />
                </motion.button>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {project.images.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndices(prev => ({
                                    ...prev,
                                    [project.id]: index
                                }));
                            }}
                            className={`w-2 h-2 rounded-full transition-all ${index === (currentImageIndices[project.id] || 0) ? 'bg-white w-4' : 'bg-white bg-opacity-50'}`}
                            aria-label={`Go to slide ${index + 1}`}
                            whileHover={{ scale: 1.2 }}
                        />
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="portfolio bg-gray-50">
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            My Projects
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-gray-600">
                            A collection of my work showcasing my skills across various technologies.
                        </p>
                    </motion.div>

                    {/* View Toggle */}
                    <motion.div
                        className="flex justify-end mt-8 mb-6 space-x-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.button
                            onClick={() => setIsGridView(true)}
                            className={`p-2 rounded-md ${isGridView ? 'bg-pink-500 text-white' : 'bg-white text-gray-700'}`}
                            title="Grid View"
                            variants={viewToggleVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                        </motion.button>
                        <motion.button
                            onClick={() => setIsGridView(false)}
                            className={`p-2 rounded-md ${!isGridView ? 'bg-pink-500 text-white' : 'bg-white text-gray-700'}`}
                            title="List View"
                            variants={viewToggleVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </motion.div>

                    {/* Projects Display */}
                    {isGridView ? (
                        <motion.div
                            className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-8 md:grid-cols-2 lg:grid-cols-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    onMouseEnter={() => handleMouseEnter(project.id)}
                                    onMouseLeave={() => handleMouseLeave(project.id)}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative h-48 overflow-hidden group">
                                        <AnimatePresence initial={false} custom={currentImageIndices[project.id]}>
                                            <motion.img
                                                key={currentImageIndices[project.id] || 0}
                                                className="absolute object-cover w-full h-full"
                                                src={project.images[currentImageIndices[project.id] || 0]}
                                                alt={`${project.title} screenshot ${(currentImageIndices[project.id] || 0) + 1}`}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </AnimatePresence>

                                        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent"></div>

                                        {project.images.length > 1 && (
                                            <>
                                                <motion.button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        prevImage(project.id);
                                                    }}
                                                    className="absolute left-0 flex items-center justify-center w-8 h-8 ml-2 text-white transition-opacity duration-300 transform -translate-y-1/2 bg-black rounded-full opacity-0 top-1/2 bg-opacity-30 group-hover:opacity-100 hover:bg-opacity-50"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <FiChevronLeft className="w-5 h-5" />
                                                </motion.button>
                                                <motion.button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        nextImage(project.id);
                                                    }}
                                                    className="absolute right-0 flex items-center justify-center w-8 h-8 mr-2 text-white transition-opacity duration-300 transform -translate-y-1/2 bg-black rounded-full opacity-0 top-1/2 bg-opacity-30 group-hover:opacity-100 hover:bg-opacity-50"
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <FiChevronRight className="w-5 h-5" />
                                                </motion.button>
                                            </>
                                        )}

                                        {project.images.length > 1 && (
                                            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                                                {project.images.map((_, index) => (
                                                    <motion.button
                                                        key={index}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndices(prev => ({
                                                                ...prev,
                                                                [project.id]: index
                                                            }));
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-all ${index === (currentImageIndices[project.id] || 0) ? 'bg-white w-4' : 'bg-white bg-opacity-50'}`}
                                                        aria-label={`Go to slide ${index + 1}`}
                                                        whileHover={{ scale: 1.2 }}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between flex-1 p-6">
                                        <div className="flex-1">
                                            <p className="mt-2 text-gray-600">{project.description}</p>

                                            <div className="mt-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-6 border-t border-gray-200 pt-4">
                                            <motion.a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-800"
                                                whileHover={{ x: 2 }}
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </motion.a>
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
                                                whileHover={{ x: 2 }}
                                            >
                                                View Code
                                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="max-w-4xl mx-auto mt-8 space-y-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {currentProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className="flex flex-col overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg md:flex-row hover:shadow-xl"
                                    variants={itemVariants}
                                    whileHover={{ y: -3 }}
                                >
                                    <ListViewImageSlider project={project} />

                                    <div className="flex flex-col justify-between flex-1 p-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                            <p className="mt-2 text-gray-600">{project.description}</p>

                                            <div className="mt-4">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.technologies.map((tech, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
                                                            whileHover={{ scale: 1.05 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-6 border-t border-gray-200 pt-4">
                                            <motion.a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-800"
                                                whileHover={{ x: 2 }}
                                            >
                                                Live Demo
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </motion.a>
                                            <motion.a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
                                                whileHover={{ x: 2 }}
                                            >
                                                View Code
                                                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <motion.div
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <nav className="flex items-center space-x-2">
                                <motion.button
                                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-100"
                                    whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                                    whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </motion.button>

                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                                    <motion.button
                                        key={number}
                                        onClick={() => paginate(number)}
                                        className={`w-10 h-10 rounded-full ${currentPage === number ? 'bg-pink-500 text-white' : 'hover:bg-pink-100'}`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {number}
                                    </motion.button>
                                ))}

                                <motion.button
                                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-pink-100"
                                    whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                                    whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </nav>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;