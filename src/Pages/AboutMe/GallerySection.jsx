import { motion } from "framer-motion";
import img1 from "../../assets/projects/1.png";
import img2 from "../../assets/bg2.jpg";
import img3 from "../../assets/projects/3.png";
import img4 from "../../assets/projects/4.png";
import img5 from "../../assets/projects/4.png";
import img6 from "../../assets/projects/3.png";

const GallerySection = () => {
    const images = [img1, img2, img3, img4, img5, img6];

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

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative overflow-hidden rounded-xl shadow-lg border-4 border-white"
                        >
                            <img
                                src={img}
                                alt={`Gallery ${index}`}
                                className="w-full h-80 object-cover"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                                <p className="text-white opacity-0 hover:opacity-100 transition duration-300 text-lg font-semibold">
                                    View Details
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
