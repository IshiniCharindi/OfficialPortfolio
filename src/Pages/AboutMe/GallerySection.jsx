import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
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
    const images = [
        {
            src: img1,
            aspect: "vertical",
            size: "small",
            title: "IEEE Open Day 2025",
            description: "Launching innovative projects and welcoming new members to our tech community"
        },
        {
            src: img2,
            aspect: "vertical",
            size: "large",
            title: "NBQSA National Awards 2025",
            description: "Celebrating excellence in software innovation and national recognition"
        },
        {
            src: img3,
            aspect: "vertical",
            size: "small",
            title: "IEEE WIE AGM 2025",
            description: "Empowering women in engineering through leadership and collaboration"
        },
        {
            src: img4,
            aspect: "horizontal",
            size: "medium",
            title: "Webmaster Appointment",
            description: "Taking charge of digital presence and web development initiatives"
        },
        {
            src: img5,
            aspect: "vertical",
            size: "small",
            title: "CST LAN Challenge 2025",
            description: "Competitive programming and networking in premier tech competition"
        },
        {
            src: img6,
            aspect: "horizontal",
            size: "small",
            title: "CST LAN Challenge 2024",
            description: "Early journey in competitive coding and team challenges"
        },
        {
            src: img7,
            aspect: "vertical",
            size: "small",
            title: "Shecoderess 2025",
            description: "Mentoring aspiring female developers in web technologies"
        },
        {
            src: img8,
            aspect: "horizontal",
            size: "medium",
            title: "Compering at CST LAN Challenge",
            description: "Hosting and engaging audience at major technical events"
        },
        {
            src: img9,
            aspect: "vertical",
            size: "large",
            title: "Happy Moment",
            description: "Celebrating successes with amazing teammates and friends"
        },
        {
            src: img11,
            aspect: "horizontal",
            size: "small",
            title: "Dean's List Recognition",
            description: "Academic excellence and consistent performance in studies"
        },
        {
            src: img10,
            aspect: "vertical",
            size: "small",
            title: "Web Team at IEEE Open Day",
            description: "Collaborative efforts in delivering exceptional digital experiences"
        },
        {
            src: img12,
            aspect: "vertical",
            size: "small",
            title: "ENTREARC 2025",
            description: "Exploring entrepreneurship and architecture innovations"
        },
        {
            src: img13,
            aspect: "horizontal",
            size: "small",
            title: "Professional Journey",
            description: "Continuous growth in the dynamic field of technology"
        },
        {
            src: img14,
            aspect: "horizontal",
            size: "small",
            title: "Winning Prizes at Shecoderess",
            description: "Recognizing impact in empowering women in technology"
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
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

                {/* Balanced Grid Layout */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage(image)}
                            className={`
                                relative overflow-hidden rounded-lg shadow-md border border-white/20 
                                cursor-pointer group
                                ${image.size === 'large' ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}
                                ${image.size === 'medium' ? 'aspect-square' : ''}
                                ${image.size === 'small' ? 'aspect-square' : ''}
                            `}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-250">
                                <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-250">
                                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/80 text-xs line-clamp-2 leading-tight">
                                        {image.description}
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