import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";
import img1 from "../../assets/gallery/g1.jpeg";
import img2 from "../../assets/gallery/g2.jpeg";
import img3 from "../../assets/gallery/g3.jpeg";
import img4 from "../../assets/gallery/g4.jpeg";
import img5 from "../../assets/gallery/g5.jpeg";
import img6 from "../../assets/gallery/g6.jpeg";
import img7 from "../../assets/gallery/g7.jpeg";
import img8 from "../../assets/gallery/g8.jpeg";
import img9 from "../../assets/gallery/g9.jpeg";
import img10 from "../../assets/gallery/g10.jpeg";
import img11 from "../../assets/gallery/g11.jpeg";
import img12 from "../../assets/gallery/g12.jpeg";
import img13 from "../../assets/gallery/g13.jpeg";
import img14 from "../../assets/gallery/g14.jpeg";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState("all");

    const images = [
        {
            src: img1,
            aspect: "vertical",
            size: "large",
            category: "events",
            title: "IEEE Open Day 2025",
            description: "Showcasing innovative projects and welcoming new members to our tech community"
        },
        {
            src: img2,
            aspect: "horizontal",
            size: "large",
            category: "achievements",
            title: "NBQSA National Awards 2025",
            description: "Recognizing excellence in software innovation and technological advancement"
        },
        {
            src: img3,
            aspect: "vertical",
            size: "medium",
            category: "leadership",
            title: "IEEE WIE AGM 2025",
            description: "Empowering women in engineering through leadership and collaboration"
        },
        {
            src: img4,
            aspect: "horizontal",
            size: "medium",
            category: "achievements",
            title: "Webmaster Appointment",
            description: "Taking on the responsibility of shaping digital presence and user experience"
        },
        {
            src: img5,
            aspect: "vertical",
            size: "large",
            category: "events",
            title: "CST LAN Challenge 2025",
            description: "Competitive coding and networking in Sri Lanka's premier tech competition"
        },
        {
            src: img6,
            aspect: "horizontal",
            size: "small",
            category: "events",
            title: "CST LAN Challenge 2024",
            description: "Early beginnings in competitive programming and team challenges"
        },
        {
            src: img7,
            aspect: "vertical",
            size: "medium",
            category: "workshops",
            title: "Shecoderess 2025",
            description: "Mentoring aspiring female coders in web development and career growth"
        },
        {
            src: img8,
            aspect: "horizontal",
            size: "large",
            category: "leadership",
            title: "Compering at CST LAN Challenge",
            description: "Hosting and engaging audiences at major technical events"
        },
        {
            src: img9,
            aspect: "vertical",
            size: "medium",
            category: "personal",
            title: "Happy Moment",
            description: "Celebrating successes with amazing teammates and collaborators"
        },
        {
            src: img11,
            aspect: "horizontal",
            size: "small",
            category: "achievements",
            title: "Dean's List Recognition",
            description: "Academic excellence and consistent performance in engineering studies"
        },
        {
            src: img10,
            aspect: "vertical",
            size: "small",
            category: "team",
            title: "Web Team at IEEE Open Day",
            description: "Collaborative efforts in delivering exceptional digital experiences"
        },
        {
            src: img12,
            aspect: "vertical",
            size: "medium",
            category: "events",
            title: "ENTREARC 2025",
            description: "Bridging entrepreneurship and architecture through innovative thinking"
        },
        {
            src: img13,
            aspect: "horizontal",
            size: "small",
            category: "personal",
            title: "Professional Journey",
            description: "Continuous growth and learning in the dynamic field of technology"
        },
        {
            src: img14,
            aspect: "horizontal",
            size: "medium",
            category: "achievements",
            title: "Winning Prizes at Shecoderess",
            description: "Recognizing dedication and impact in empowering women in tech"
        },
    ];

    const categories = [
        { id: "all", label: "All Moments" },
        { id: "achievements", label: "Achievements" },
        { id: "events", label: "Events" },
        { id: "leadership", label: "Leadership" },
        { id: "workshops", label: "Workshops" },
        { id: "team", label: "Teamwork" },
        { id: "personal", label: "Personal" }
    ];

    const filteredImages = filter === "all" ? images : images.filter(img => img.category === filter);

    const getGridClass = (size, aspect) => {
        if (size === "large") {
            return aspect === "vertical" ? "col-span-2 row-span-2" : "col-span-3 row-span-2";
        }
        if (size === "medium") {
            return aspect === "vertical" ? "col-span-1 row-span-2" : "col-span-2 row-span-1";
        }
        return "col-span-1 row-span-1";
    };

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Journey Through Moments
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Capturing milestones, achievements, and memories that define my growth in technology and leadership
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-8"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setFilter(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                filter === category.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200"
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </motion.div>

                {/* Enhanced Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]">
                    {filteredImages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            onClick={() => setSelectedImage(item)}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getGridClass(item.size, item.aspect)}`}
                        >
                            {/* Image */}
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-white font-bold text-sm leading-tight flex-1 pr-2">
                                            {item.title}
                                        </h3>
                                        <ExternalLink size={16} className="text-white/80 flex-shrink-0 mt-1" />
                                    </div>
                                    <p className="text-white/90 text-xs leading-relaxed mb-3 line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="inline-block px-2 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                                            {item.category}
                                        </span>
                                        <div className="flex space-x-1">
                                            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></div>
                                            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute top-0 -left-full group-hover:left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-45 transition-all duration-1000"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500 text-lg">No images found for this category.</p>
                    </motion.div>
                )}

                {/* Enhanced Modal */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{
                                    type: "spring",
                                    damping: 30,
                                    stiffness: 300
                                }}
                                className="relative max-w-6xl max-h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70"
                                >
                                    <X size={28} />
                                </button>

                                {/* Image Container */}
                                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.title}
                                        className="w-full max-h-[70vh] object-contain"
                                    />

                                    {/* Info Section */}
                                    <div className="p-6 bg-gradient-to-r from-gray-900 to-blue-900">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-white text-2xl font-bold pr-4">
                                                {selectedImage.title}
                                            </h3>
                                            <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm rounded-full whitespace-nowrap">
                                                {selectedImage.category}
                                            </span>
                                        </div>
                                        <p className="text-white/90 text-lg leading-relaxed">
                                            {selectedImage.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;