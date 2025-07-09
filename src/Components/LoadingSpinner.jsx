import { motion } from 'framer-motion';

const DoorLoadingAnimation = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-pink-400 z-[9999] overflow-hidden">
            <div className="relative w-full h-full">
                {/* Left Door - White with pink accent */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        duration: 4,
                        ease: [0.65, 0, 0.35, 1], // Smooth ease-in-out
                        delay: 0.2
                    }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-white border-r border-pink-300"
                    style={{
                        transformOrigin: 'left center',
                        boxShadow: '8px 0 15px -5px rgba(0,0,0,0.1)'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Welcome</h2>
                        <p className="text-xl md:text-2xl text-pink-500">to my world</p>
                    </motion.div>
                </motion.div>

                {/* Right Door - White with pink accent */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '100%' }}
                    transition={{
                        duration: 4,
                        ease: [0.65, 0, 0.35, 1], // Matches left door timing
                        delay: 0.2
                    }}
                    className="absolute top-0 right-0 w-1/2 h-full bg-white border-l border-pink-300"
                    style={{
                        transformOrigin: 'right center',
                        boxShadow: '-8px 0 15px -5px rgba(0,0,0,0.1)'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">Explore</h2>
                        <p className="text-xl md:text-2xl text-pink-500">who I am</p>
                    </motion.div>
                </motion.div>

                {/* Center Content - Appears after doors open */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 1.6,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{
                            delay: 1.8,
                            duration: 0.6,
                            ease: "backOut"
                        }}
                        className="text-center"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                            Discovering My Journey
                        </h1>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{
                                delay: 2.0,
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                            className="h-1 bg-pink-400 mx-auto mb-4"
                        />
                        <p className="text-xl text-gray-500">
                            Crafting digital experiences
                        </p>
                    </motion.div>
                </motion.div>

                {/* Fade out overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        delay: 2.8,
                        duration: 0.6
                    }}
                    className="absolute inset-0 bg-white"
                />
            </div>
        </div>
    );
};

export default DoorLoadingAnimation;