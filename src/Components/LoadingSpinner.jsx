import { motion } from 'framer-motion';

const DoorLoadingAnimation = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] overflow-hidden">
            {/* White overlay that fades out */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                    duration: 4.8, // Matches door animation duration (5s - 0.2s delay)
                    delay: 2,    // Matches door animation delay
                    ease: "linear" // Smooth linear fade
                }}
                className="absolute inset-0 bg-white z-0"
            />

            <div className="relative w-full h-full z-10">
                {/* Left Door - Pink gradient */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        duration: 5,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.2
                    }}
                    className="absolute top-0 left-0 w-1/2 h-full"
                    style={{
                        transformOrigin: 'left center',
                        boxShadow: '16px 0 30px -10px rgba(0,0,0,0.15)',
                        background: 'linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(244,114,182,0.7) 70%, rgba(255,255,255,0.3) 100%)'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                            ease: [0.33, 1, 0.68, 1]
                        }}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right"
                    >
                        <h2 className="text-5xl text-black md:text-6xl font-bold mb-3  bg-clip-text bg-gradient-to-r from-white to-gray-100">
                            Welcome
                        </h2>
                        <p className="text-2xl text-black md:text-3xl font-medium ">
                            to my world
                        </p>
                    </motion.div>
                </motion.div>

                {/* Right Door - Gray gradient */}
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '100%' }}
                    transition={{
                        duration: 5,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.2
                    }}
                    className="absolute top-0 right-0 w-1/2 h-full"
                    style={{
                        transformOrigin: 'right center',
                        boxShadow: '-16px 0 30px -10px rgba(0,0,0,0.15)',
                        background: 'linear-gradient(270deg, rgba(75,85,99,1) 0%, rgba(156,163,175,0.7) 70%, rgba(255,255,255,0.3) 100%)'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 1,
                            ease: [0.33, 1, 0.68, 1]
                        }}
                        className="absolute left-10 top-1/2 transform -translate-y-1/2 text-left"
                    >
                        <h2 className="text-5xl text-black md:text-6xl font-bold mb-3  bg-clip-text bg-gradient-to-r from-white to-gray-200">
                            Explore
                        </h2>
                        <p className="text-2xl text-black md:text-3xl font-medium">
                            who I am
                        </p>
                    </motion.div>
                </motion.div>

                {/* Subtle floating particles - White */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                y: [0, 100],
                                x: Math.random() * 100 - 50
                            }}
                            transition={{
                                duration: 4 + Math.random() * 3,
                                delay: Math.random() * 2,
                                repeat: Infinity
                            }}
                            className="absolute rounded-full"
                            style={{
                                width: `${Math.random() * 6 + 2}px`,
                                height: `${Math.random() * 6 + 2}px`,
                                background: `rgba(255,255,255,${Math.random() * 0.7 + 0.3})`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoorLoadingAnimation;