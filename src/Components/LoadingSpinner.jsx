import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-white">
            <div className="relative flex flex-col items-center justify-center space-y-8">
                {/* Animated Spinner with Pink and Gray */}
                <div className="relative">
                    {/* Outer Gray Ring */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="absolute inset-0 border-4 rounded-full"
                        style={{
                            borderColor: 'rgba(75,85,99,0.3)',
                        }}
                    />

                    {/* Inner Pink Spinning Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="w-20 h-20 border-4 rounded-full border-transparent"
                        style={{
                            borderTopColor: 'rgba(236,72,153,1)',
                            borderRightColor: 'rgba(244,114,182,0.7)',
                        }}
                    />

                    {/* Center Dot */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    >
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{
                                background: 'linear-gradient(135deg, rgba(236,72,153,1) 0%, rgba(75,85,99,1) 100%)',
                            }}
                        />
                    </motion.div>
                </div>

                {/* Name with Sequential Animation */}
                <div className="text-center space-y-4">
                    {/* First Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex justify-center space-x-2"
                    >
                        {["I", "s", "h", "i", "n", "i"].map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1 + index * 0.1,
                                    duration: 0.5,
                                }}
                                className="text-4xl md:text-5xl font-bold"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(236,72,153,1) 0%, rgba(244,114,182,1) 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Last Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6, duration: 0.8 }}
                        className="flex justify-center space-x-2"
                    >
                        {["D", "e", "w", "a", "m", "i", "t", "h", "t", "h", "a"].map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1.8 + index * 0.08,
                                    duration: 0.5,
                                }}
                                className="text-3xl md:text-4xl font-semibold"
                                style={{
                                    color: 'rgba(75,85,99,1)',
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Loading Text with Pulse */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.5 }}
                    className="text-center"
                >
                    <motion.p
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="text-lg"
                        style={{
                            color: 'rgba(75,85,99,0.8)',
                        }}
                    >
                        Loading...
                    </motion.p>
                </motion.div>

                {/* Subtle Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                scale: [0, 1, 0],
                                x: Math.random() * 100 - 50,
                                y: Math.random() * 100 - 50,
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                delay: Math.random() * 1,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2,
                            }}
                            className="absolute rounded-full"
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                background: i % 2 === 0
                                    ? 'rgba(236,72,153,0.6)'
                                    : 'rgba(75,85,99,0.6)',
                                top: "50%",
                                left: "50%",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;