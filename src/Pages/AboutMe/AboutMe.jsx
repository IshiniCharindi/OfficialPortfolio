import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillsSection from "./SkillsSection.jsx";
import ExtracurricularSection from "./ExtracurricularSection.jsx";
import HeroSection from "./HeroSection.jsx";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative w-16 h-16 mx-auto mb-4"
            >
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 border-r-pink-500"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-b-purple-500 border-l-purple-500 transform rotate-45"></div>
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
        // Simulate loading data
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Adjust time as needed

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
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