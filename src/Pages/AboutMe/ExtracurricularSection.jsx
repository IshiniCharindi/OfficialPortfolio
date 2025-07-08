import { motion } from 'framer-motion';

const ExtracurricularSection = ({ activities }) => {
    // Duplicate activities for infinite loop
    const duplicatedActivities = [...activities, ...activities];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        },
        hover: {
            y: -8,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold text-gray-900 mb-4"
                    >
                        Beyond Code
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-lg text-gray-600"
                    >
                        I pursue passions beyond coding that shape me into a well-rounded creator and problem-solver
                    </motion.p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative h-96">
                    {/* Horizontal Timeline Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-pink-400 to-indigo-500 transform -translate-y-1/2 z-0"
                    ></motion.div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Timeline Items Container */}
                    <div className="relative h-full overflow-hidden">
                        <div className="inline-flex whitespace-nowrap animate-infinite-scroll items-center h-full">
                            {duplicatedActivities.map((activity, index) => (
                                <motion.div
                                    key={`activity-${index}`}
                                    className="relative flex-shrink-0 px-8 h-full flex items-center"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1 }
                                    }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {/* Timeline Dot with Pulse Animation */}
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.1 + 0.3,
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        <div className={`w-6 h-6 -mt-2 rounded-full ${index % 2 === 0 ? 'bg-pink-600' : 'bg-indigo-600'} flex items-center justify-center`}>
                                            <motion.div
                                                className={`w-3 h-3  rounded-full bg-white ${index % 2 === 0 ? 'animate-ping-pink' : 'animate-ping-indigo'}`}
                                                animate={{ scale: [1, 1.5, 1] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Year Indicator */}
                                    <motion.div
                                        className={`absolute ${index % 2 === 0 ? 'top-1/4' : 'top-3/4'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold ${index % 2 === 0 ? 'text-pink-600' : 'text-indigo-600'}`}
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: index * 0.1 + 0.4,
                                            duration: 0.5
                                        }}
                                    >
                                        {activity.title}
                                    </motion.div>

                                    {/* Card positioned alternately */}
                                    <motion.div
                                        className={`relative ${index % 2 === 0 ? '-mt-20' : 'mt-20'}`}
                                        variants={cardVariants}
                                        whileHover="hover"
                                    >
                                        <motion.div
                                            className="bg-white rounded-lg shadow-md p-4 w-auto text-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.1 + 0.5,
                                                duration: 0.5
                                            }}
                                        >
                                            <p className="text-gray-700">{activity.description}</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtracurricularSection;