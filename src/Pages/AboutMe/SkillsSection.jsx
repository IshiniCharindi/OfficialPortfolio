import SkillCard from "./SkillCard";

const SkillsSection = () => {
    const skills = [
        {
            icon: "https://img.icons8.com/plasticine/100/react.png",
            title: "React",
            description: "Building dynamic, reusable components and high-performance user interfaces."
        },
        {
            icon: "https://img.icons8.com/fluency/48/node-js.png",
            title: "Node.js",
            description: "JavaScript runtime for building fast, scalable server-side applications."
        },
        {
            icon: "https://img.icons8.com/color/48/python--v1.png",
            title: "Python & Django",
            description: "Versatile language with powerful framework for secure web applications."
        },
        {
            icon: "https://img.icons8.com/color/48/spring-logo.png",
            title: "Spring Boot",
            description: "Java framework for robust, production-ready backend applications."
        },
        {
            icon: "https://img.icons8.com/dusk/64/php-logo.png",
            title: "PHP",
            description: "Scripting language for dynamic web applications and server-side scripting."
        },
        {
            icon: "https://img.icons8.com/color/48/mongo-db.png",
            title: "MongoDB",
            description: "NoSQL database for flexible, JSON-like document storage."
        },
        {
            icon: "https://img.icons8.com/color/48/mysql-logo.png",
            title: "MySQL",
            description: "Reliable RDBMS for managing structured data with SQL queries."
        },
        {
            icon: "https://img.icons8.com/fluency/48/angularjs.png",
            title: "Angular",
            description: "TypeScript framework for dynamic single-page applications."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">My Technical Skills</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        I specialize in modern web technologies that help build fast, scalable, and user-friendly applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 transition duration-300">
                        View All Services
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 -mr-1 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;