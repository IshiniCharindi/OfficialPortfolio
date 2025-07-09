// src/Components/LoadingSpinner.jsx
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="text-center space-y-4">
                {/* Modern animated logo or icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto"
                >
                    {/* Replace this with your logo or a custom spinner */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 rounded-full bg-white"
                        ></motion.div>
                    </div>
                </motion.div>

                {/* Animated text */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-gray-800"
                >
                    Loading your experience
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="inline-block ml-1"
                    >
                        ...
                    </motion.span>
                </motion.div>

                {/* Progress indicator */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto max-w-xs"
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;