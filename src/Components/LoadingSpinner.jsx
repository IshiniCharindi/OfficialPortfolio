import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="relative flex flex-col items-center justify-center space-y-8">
                {/* Animated Logo/Initials */}
                <div className="relative">
                    {/* Outer rotating ring */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                        className="absolute inset-0 border-4 border-transparent rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, #ec4899, #8b5cf6, #ec4899)",
                        }}
                    />

                    {/* Middle ring */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.3,
                            ease: "easeOut",
                        }}
                        className="absolute inset-2 border-3 border-white/20 rounded-full"
                    />

                    {/* Center circle with initials */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.6,
                            ease: "easeOut",
                        }}
                        className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                        >
                            ID
                        </motion.span>
                    </motion.div>
                </div>

                {/* Name Text */}
                <div className="text-center space-y-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-wide"
                    >
                        Ishini Dewamiththa
                    </motion.h1>

                    {/* Animated loading bar */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
                        className="h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mt-4"
                    />
                </div>

                {/* Loading dots */}
                <motion.div className="flex space-x-2">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 1.4 + index * 0.2,
                                duration: 0.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                            }}
                            className="w-2 h-2 bg-white rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1, 0],
                                x: Math.random() * 200 - 100,
                                y: Math.random() * 200 - 100,
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                delay: Math.random() * 2,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 3,
                            }}
                            className="absolute rounded-full"
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                background: `rgba(255,255,255,${Math.random() * 0.6 + 0.2})`,
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