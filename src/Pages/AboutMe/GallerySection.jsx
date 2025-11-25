import { motion } from "framer-motion";
import img1 from "../../assets/projects/1.png";
import img2 from "../../assets/bg2.jpg";
import img3 from "../../assets/projects/3.png";
import img4 from "../../assets/projects/4.png";
import img5 from "../../assets/projects/4.png";
import img6 from "../../assets/projects/3.png";

const GallerySection = () => {
    const images = [
        { src: img1, aspect: "vertical", size: "medium" },
        { src: img2, aspect: "horizontal", size: "large" },
        { src: img3, aspect: "vertical", size: "small" },
        { src: img4, aspect: "horizontal", size: "medium" },
        { src: img5, aspect: "vertical", size: "large" },
        { src: img6, aspect: "horizontal", size: "small" },
        { src: img6, aspect: "horizontal", size: "small" },
        { src: img6, aspect: "horizontal", size: "small" },
        { src: img6, aspect: "horizontal", size: "small" },
        { src: img6, aspect: "horizontal", size: "small" },

    ];

    const getImageClass = (aspect, size) => {
        const baseClass = "rounded-xl shadow-lg border-2 border-white object-cover";
        const aspectClass = aspect === "vertical" ? "aspect-[3/4]" : "aspect-[4/3]";
        const sizeClass = size === "large" ? "col-span-2 row-span-2" :
            size === "medium" ? "col-span-1 row-span-1" :
                "col-span-1 row-span-1";

        return `${baseClass} ${aspectClass} ${sizeClass}`;
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

                {/* Modern Collage Grid */}
                {/*<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[120px]">*/}
                {/*    {images.map((item, index) => (*/}
                {/*        <motion.div*/}
                {/*            key={index}*/}
                {/*            initial={{ opacity: 0, scale: 0.8 }}*/}
                {/*            whileInView={{ opacity: 1, scale: 1 }}*/}
                {/*            transition={{ duration: 0.5, delay: index * 0.1 }}*/}
                {/*            whileHover={{ scale: 1.05, zIndex: 10 }}*/}
                {/*            className={`relative overflow-hidden cursor-pointer ${getImageClass(item.aspect, item.size)}`}*/}
                {/*        >*/}
                {/*            <img*/}
                {/*                src={item.src}*/}
                {/*                alt={`Gallery ${index}`}*/}
                {/*                className="w-full h-full object-cover"*/}
                {/*            />*/}

                {/*            /!* Gradient Overlay *!/*/}
                {/*            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300">*/}
                {/*                <div className="absolute bottom-3 left-3 right-3">*/}
                {/*                    <p className="text-white text-sm font-semibold truncate">*/}
                {/*                        Moment {index + 1}*/}
                {/*                    </p>*/}
                {/*                    <p className="text-white/80 text-xs mt-1">*/}
                {/*                        Click to view details*/}
                {/*                    </p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </motion.div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                {/* Alternative: Masonry Layout */}
                {/* Uncomment this section if you prefer masonry style */}

                <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                            className="relative overflow-hidden rounded-xl shadow-lg border-2 border-white break-inside-avoid mb-3"
                        >
                            <img
                                src={item.src}
                                alt={`Gallery ${index}`}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition duration-300 flex items-end">
                                <div className="p-3 transform translate-y-4 hover:translate-y-0 transition duration-300">
                                    <p className="text-white text-sm font-semibold">
                                        Moment {index + 1}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GallerySection;