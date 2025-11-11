import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
    const firstName = "ISHINI";
    const lastName = "DEWAMITHTHA";

    // Smooth letter animation
    const letterVariant = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
        float: (i) => ({
            y: [0, -8, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
            }
        })
    };

    // Subtle particle effect
    const ParticleField = () => (
        <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                        background: `radial-gradient(circle, 
                            rgba(236,72,153,0.4) 0%, 
                            rgba(244,114,182,0.2) 50%, 
                            transparent 100%)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.6, 0],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden z-[9999] bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Subtle background gradient */}
            <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(244,114,182,0.05) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.05) 0%, transparent 50%)",
                    ],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <ParticleField />

            {/* Main Content Container - Centered */}
            <div className="relative flex flex-col items-center justify-center space-y-6">
                {/* Light sweep effect */}
                <motion.div
                    className="absolute w-64 h-48 bg-gradient-to-r from-transparent via-pink-100/20 to-transparent blur-xl"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut",
                    }}
                />

                {/* First Name - Pink Gradient */}
                <div className="flex space-x-1 relative">
                    {firstName.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            variants={letterVariant}
                            initial="hidden"
                            animate={["visible", "float"]}
                            className="text-6xl md:text-7xl font-bold tracking-tight"
                            style={{
                                background: "linear-gradient(135deg, #ec4899, #f472b6)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 4px 20px rgba(236,72,153,0.2)",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Last Name - Gray Gradient */}
                <div className="flex space-x-1">
                    {lastName.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            custom={i + firstName.length}
                            variants={letterVariant}
                            initial="hidden"
                            animate={["visible", "float"]}
                            className="text-3xl md:text-4xl font-medium tracking-wide"
                            style={{
                                background: "linear-gradient(135deg, #6b7280, #9ca3af)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "0 2px 12px rgba(107,114,128,0.15)",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>

                {/* Simple Dot Loader */}
                <div className="flex space-x-2 mt-8">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            className="w-2 h-2 rounded-full"
                            style={{
                                background: "linear-gradient(135deg, #ec4899, #f472b6)",
                            }}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                                delay: dot * 0.2,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>

                {/* Loading Text */}
                <motion.div
                    className="text-sm font-light tracking-widest mt-4"
                    style={{
                        background: "linear-gradient(135deg, #6b7280, #9ca3af)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    LOADING PORTFOLIO
                </motion.div>
            </div>

            {/* Subtle floating elements */}
            <motion.div
                className="absolute w-64 h-64 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
                }}
                animate={{
                    x: [0, 40, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </motion.div>
    );
};

export default LoadingScreen;