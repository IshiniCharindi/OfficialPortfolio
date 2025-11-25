import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import img1 from "../../assets/projects/1.png";
import img2 from "../../assets/bg2.jpg";
import img3 from "../../assets/projects/3.png";
import img4 from "../../assets/projects/4.png";
import img5 from "../../assets/projects/4.png";
import img6 from "../../assets/projects/3.png";

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = [
        {
            src: img1,
            aspect: "vertical",
            size: "medium",
            title: "Project Launch",
            description: "Successfully launched our flagship project with team collaboration"
        },
        {
            src: img2,
            aspect: "horizontal",
            size: "large",
            title: "Team Building",
            description: "Annual team retreat focused on innovation and collaboration"
        },
        {
            src: img3,
            aspect: "vertical",
            size: "small",
            title: "Workshop",
            description: "Conducted technical workshop for 50+ participants"
        },
        {
            src: img4,
            aspect: "horizontal",
            size: "medium",
            title: "Award Ceremony",
            description: "Received excellence award for outstanding performance"
        },
        {
            src: img5,
            aspect: "vertical",
            size: "large",
            title: "Volunteering",
            description: "Community service initiative for local education"
        },
        {
            src: img6,
            aspect: "horizontal",
            size: "small",
            title: "Conference",
            description: "Speaking at international tech conference 2024"
        },
        {
            src: img6,
            aspect: "vertical",
            size: "small",
            title: "Mentorship",
            description: "Guiding junior developers in coding best practices"
        },
        {
            src: img6,
            aspect: "horizontal",
            size: "medium",
            title: "Innovation",
            description: "Brainstorming session for new product features"
        },
        {
            src: img6,
            aspect: "vertical",
            size: "large",
            title: "Achievement",
            description: "Celebrating milestone achievement with the team"
        },
        {
            src: img6,
            aspect: "horizontal",
            size: "small",
            title: "Networking",
            description: "Industry networking event and knowledge sharing"
        },
    ];

    const getMasonryClass = (size) => {
        switch(size) {
            case 'large': return 'h-72'; // Reduced from h-80
            case 'medium': return 'h-56'; // Reduced from h-64
            case 'small': return 'h-40';  // Reduced from h-48
            default: return 'h-48';
        }
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl font-bold text-black mb-4"
                >
                    Moments That Shaped My Journey
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-600 max-w-2xl mx-auto mb-12"
                >
                    A glimpse into my achievements, volunteering, workshops, teamwork, and milestone moments.
                </motion.p>

                {/* Optimized Masonry Layout */}
                <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-3">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setSelectedImage(item)}
                            className={`relative overflow-hidden rounded-lg shadow-md border border-white/20 break-inside-avoid mb-3 cursor-pointer group ${getMasonryClass(item.size)}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Optimized Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-250">
                                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-250">
                                    <h3 className="text-white text-sm font-bold mb-1 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/85 text-xs leading-tight line-clamp-2">
                                        {item.description}
                                    </p>
                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="text-white/60 text-xs">
                                            Click to view
                                        </span>
                                        <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Alternative: Compact Grid Layout */}
                {/*
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            onClick={() => setSelectedImage(item)}
                            className={`relative overflow-hidden rounded-lg shadow-md border border-white/20 cursor-pointer group ${
                                item.size === 'large' ? 'col-span-2 row-span-2' :
                                item.size === 'medium' ? 'col-span-1 row-span-1' :
                                'col-span-1 row-span-1'
                            } ${
                                item.aspect === 'vertical' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                            }`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-250">
                                <div className="absolute bottom-2 left-2 right-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-250">
                                    <h3 className="text-white font-semibold text-xs mb-1 line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-xs line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                */}

                {/* Modal for Enlarged View */}
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
                                transition={{ type: "spring", damping: 25 }}
                                className="relative max-w-4xl max-h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-1"
                                >
                                    <X size={24} />
                                </button>

                                {/* Image */}
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.title}
                                    className="rounded-lg shadow-2xl max-w-full max-h-[80vh] object-contain"
                                />

                                {/* Description */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-lg">
                                    <h3 className="text-white text-xl font-bold mb-1">
                                        {selectedImage.title}
                                    </h3>
                                    <p className="text-white/90 text-sm">
                                        {selectedImage.description}
                                    </p>
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