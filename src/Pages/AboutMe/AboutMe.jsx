import image2 from "../../assets/ishini1.png";
import bg2 from "../../assets/bg2.jpg";

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
            {/* Hero Section */}
            <section
                className="relative overflow-hidden min-h-screen flex items-center bg-gray-100"
                style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative z-10 py-20">
                    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl mb-2">
                                Hey, I am
                            </h2>
                            <h1 className="text-3xl sm:text-6xl text-gray-900 font-bold leading-tight mb-6">
                                Ishini Dewamiththa
                            </h1>
                            <h3 className="text-2xl sm:text-3xl text-pink-600 font-semibold mb-8">
                                Web Developer & Designer
                            </h3>
                            <p className="max-w-lg mx-auto md:mx-0 text-lg leading-relaxed text-gray-700 mb-10">
                                A dedicated professional from Sri Lanka committed to delivering exceptional web solutions
                                tailored to your specific needs with creativity and technical excellence.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <button className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition-all duration-300 bg-pink-600 border border-transparent rounded-full hover:bg-pink-700 hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-card-list mr-2" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                    </svg>
                                    View Resume
                                </button>
                                <button className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-pink-600 transition-all duration-300 bg-white border border-pink-600 rounded-full hover:bg-pink-50 hover:shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chat-left-text mr-2" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                                    </svg>
                                    Contact Me
                                </button>
                            </div>
                        </div>

                        <div className="relative flex justify-center">
                            <div className="relative w-full max-w-md">
                                <img
                                    className="w-full h-auto rounded-lg shadow-2xl border-4 border-white transform hover:scale-105 transition duration-500"
                                    src={image2}
                                    alt="Ishini Dewamiththa"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg">
                                    <span className="font-bold">5+ Years</span> Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extracurricular Activities Section */}
            <section className="py-16 bg-white overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Coding</h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600">
                            My passions and interests that shape me as a well-rounded individual
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-pink-50 to-transparent z-10"></div>
                        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>

                        <div className="overflow-hidden py-4">
                            <div className="inline-flex whitespace-nowrap animate-infinite-scroll">
                                {activities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg"
                                        style={{ width: "300px" }}
                                    >
                                        <div className="p-6">
                                            <div className="text-4xl mb-4">{activity.icon}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                                            <p className="text-gray-600">{activity.description}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* Duplicate for seamless looping */}
                                {activities.map((activity, index) => (
                                    <div
                                        key={`duplicate-${index}`}
                                        className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg"
                                        style={{ width: "300px" }}
                                    >
                                        <div className="p-6">
                                            <div className="text-4xl mb-4">{activity.icon}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                                            <p className="text-gray-600">{activity.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">My Technical Skills</h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600">
                            I specialize in modern web technologies that help build fast, scalable, and user-friendly applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {[
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
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100"
                            >
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={skill.icon}
                                            alt={skill.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                        <h3 className="ml-4 text-xl font-bold text-gray-900">{skill.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{skill.description}</p>
                                </div>
                            </div>
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
        </div>
    );
};

export default AboutMe;