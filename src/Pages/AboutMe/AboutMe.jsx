import image2 from "../../assets/ishini1.png";
import bg2 from "../../assets/bg2.jpg";
import SkillsSection from "./SkillsSection.jsx";
import ExtracurricularSection from "./ExtracurricularSection.jsx";
import HeroSection from "./HeroSection.jsx";

const AboutMe = () => {
    const activities = [
        {
            title: "Public Speaking",
            icon: "🎤",
            description: "Competed in national level debate competitions and won several awards"
        },
        {
            title: "Photography",
            icon: "📷",
            description: "Passionate about landscape and portrait photography, exhibited work locally"
        },
        {
            title: "Volunteering",
            icon: "🤝",
            description: "Active member of Rotaract club, organized charity events and community projects"
        },
        {
            title: "Creative Writing",
            icon: "✍️",
            description: "Published short stories in university literary magazine"
        },
        {
            title: "Hiking",
            icon: "⛰️",
            description: "Completed several challenging trails including Adam's Peak night climb"
        },
        {
            title: "Chess",
            icon: "♟️",
            description: "University chess team member, participated in inter-university tournaments"
        },
        {
            title: "Music",
            icon: "🎵",
            description: "Play violin in local orchestra, performed at cultural events"
        },
        {
            title: "Dancing",
            icon: "💃",
            description: "Trained in traditional Sri Lankan dance forms since childhood"
        }
    ];

    return (
        <div className="about w-full min-h-screen overflow-hidden">
            <HeroSection />
            <ExtracurricularSection activities={activities} />
            <SkillsSection />
        </div>
    );
};

export default AboutMe;