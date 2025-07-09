import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillsSection from "../Pages/AboutMe/SkillsSection.jsx";
import ExtracurricularSection from "../Pages/AboutMe/ExtracurricularSection.jsx";
import HeroSection from "../Pages/AboutMe/HeroSection.jsx";

const DoorLoadingAnimation = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 z-50 overflow-hidden">
            {/* Left Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100vw' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 w-1/2 h-full bg-gradient-to-r from-pink-700 to-purple-900 flex items-center justify-end pr-8"
                style={{
                    transformOrigin: 'left center',
                    boxShadow: '10px 0 15px -5px rgba(0,0,0,0.3)'
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white text-right pr-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Welcome</h2>
                    <p className="text-xl md:text-2xl">to my world</p>
                </motion.div>
            </motion.div>

            {/* Right Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: '100vw' }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 w-1/2 h-full bg-gradient-to-l from-pink-700 to-purple-900 flex items-center justify-start pl-8"
                style={{
                    transformOrigin: 'right center',
                    boxShadow: '-10px 0 15px -5px rgba(0,0,0,0.3)'
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-white text-left pl-4"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Explore</h2>
                    <p className="text-xl md:text-2xl">who I am</p>
                </motion.div>
            </motion.div>

            {/* Center content that appears after doors open */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <div className="text-center">
                    <motion.h1
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 1.8 }}
                        className="text-3xl md:text-4xl font-bold text-white mb-2"
                    >
                        Discovering My Journey
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 2 }}
                        className="text-xl text-gray-300"
                    >
                        Loading my experiences and skills...
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

const AboutMe = () => {
    const [isLoading, setIsLoading] = useState(true);
    const activities = [
        {
            title: "2025",
            description: "Webmaster of IEEE WIE UWU"
        },
        {
            title: "2024",
            description: "Co-Founder at Soft Detroits"
        },
        {
            title: "2022",
            description: "Active member of UWU Dancing Circle"
        },
        {
            title: "2022",
            description: "Active member of UWU Chess Team"
        },
        {
            title: "2022",
            description: "Active member of IEEE UWU Student Branch"
        },
        {
            title: "2021",
            description: "Assistant Manager at Kandy Backpackers Hostel"
        },
        {
            title: "2021",
            description: "Call Center Agent at BPO Connect"
        },
        {
            title: "2020",
            description: "Trainee at Bank Of Ceylon"
        },
        {
            title: "2019",
            description: "Completed GCE A/L"
        },
        {
            title: "2016",
            description: "Completed GCE O/L"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <DoorLoadingAnimation />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="about w-full min-h-screen overflow-hidden"
        >
            <HeroSection />
            <ExtracurricularSection activities={activities} />
            <SkillsSection />
        </motion.div>
    );
};

export default AboutMe;