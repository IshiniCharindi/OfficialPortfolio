import SkillsSection from "./SkillsSection.jsx";
import ExtracurricularSection from "./ExtracurricularSection.jsx";
import HeroSection from "./HeroSection.jsx";

const AboutMe = () => {
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

    return (
        <div className="about w-full min-h-screen overflow-hidden">
            <HeroSection />
            <ExtracurricularSection activities={activities} />
            <SkillsSection />
        </div>
    );
};

export default AboutMe;