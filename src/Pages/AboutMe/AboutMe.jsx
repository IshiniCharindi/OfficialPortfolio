import image2 from "../../assets/ishini1.png";
import bg2 from "../../assets/bg2.jpg";

const AboutMe = () => {
    return (

        <div className="about w-full min-h-screen overflow-hidden">
                <section
                    className=" overflow-hidden  min-h-screen"
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2">
                            <div className="mt-10 md:order-1 order-2">
                                <h2 className="text-2xl font-bold leading-tight text-black sm:text-xl lg:text-3xl">
                                    Hey, I am a
                                </h2>
                                <h1 className="text-5xl sm:text-7xl text-[#36454F] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] font-bold leading-tight">
                                    Freelancer
                                </h1>
                                <p className="max-w-lg mt-3 leading-relaxed text-gray-600 md:mt-8">
                                    I am Ishini Charindi, a dedicated Web Designer and Developer from Sri Lanka,
                                    committed to delivering exceptional service to my clients. With a focus on
                                    excellence, I aim to create captivating and functional web solutions tailored
                                    to your specific needs.
                                </p>

                                <button className="flex items-center justify-center px-4 py-2 mt-10 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl hover:bg-pink-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list mr-2" viewBox="0 0 16 16">
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                    </svg>
                                    View Resume
                                </button>

                                {/*<section className="mt-14 -mb-20 -ml-10">*/}
                                {/*    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">*/}
                                {/*        <div className="grid grid-cols-2 gap-6 px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-12">*/}
                                {/*            <div className="overflow-hidden">*/}
                                {/*                <div className="px-4 py-6">*/}
                                {/*                    <div className="flex items-start">*/}
                                {/*                        <svg className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" />*/}
                                {/*                        </svg>*/}
                                {/*                        <div className="ml-4">*/}
                                {/*                            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">6+</h4>*/}
                                {/*                            <p className="mt-1.5 text-sm sm:text-lg font-medium leading-tight text-gray-500">Years of Experience</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}

                                {/*            <div className="overflow-hidden">*/}
                                {/*                <div className="px-4 py-6">*/}
                                {/*                    <div className="flex items-start">*/}
                                {/*                        <svg className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />*/}
                                {/*                        </svg>*/}
                                {/*                        <div className="ml-4">*/}
                                {/*                            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900">3,274</h4>*/}
                                {/*                            <p className="mt-1.5 text-sm sm:text-lg font-medium leading-tight text-gray-500">Projects Completed</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</section>*/}
                            </div>

                            <div className="relative md:order-2 order-1">
                                <img
                                    className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                    src={image2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* What I Do section */}
                <section className="py-10 bg-gray-100 sm:py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">What I Do</h2>
                                <p className="max-w-4xl mt-4 text-base leading-relaxed text-gray-600">
                                    I'm a passionate and dedicated web developer at the beginning of my journey in the tech world.
                                    Below is a quick overview of the technical skills and technologies I've been learning and working with.
                                </p>
                            </div>
                            <button className="flex items-center justify-center px-4 py-2 mt-4 sm:mt-0 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl hover:bg-pink-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right mr-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                                Services
                            </button>
                        </div>


                            <section className="py-10 bg-gray-100 sm:py-16 ">
                                <div className="mx-auto max-w-7xl sm:px-6 ">

                                    <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="50" height="50" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">React</p>
                                                    </div>
                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        A JavaScript library for building dynamic, reusable components and high-performance user interfaces.
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">Node.js</p>
                                                    </div>

                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        Node.js is a JavaScript runtime that enables building fast, scalable server-side applications and APIs, ideal for real-time and data-intensive applications.

                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-xl font-bold text-black truncate">Python & Django</p>

                                                    </div>

                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        Python is a versatile language known for simplicity, and Django is its powerful web framework for building secure, scalable web applications.

                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/color/48/spring-logo.png" alt="spring-logo"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">Spring boot</p>

                                                    </div>
                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        A Java framework for building robust, scalable, and production-ready backend applications with minimal configuration.

                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="64" height="64" src="https://img.icons8.com/dusk/64/php-logo.png" alt="php-logo"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">php</p>

                                                    </div>

                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        A widely-used scripting language for building dynamic web applications and server-side scripting.

                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/color/48/mongo-db.png" alt="mongo-db"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">MongoDB</p>

                                                    </div>

                                                </div>
                                                <blockquote className="mt-5">
                                                    <p className="text-base text-gray-800">
                                                        A NoSQL database that stores data in flexible, JSON-like documents, making it ideal for handling large volumes of unstructured data.

                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden bg-white rounded-md">
                                            <div className="px-5 py-6">
                                                <div className="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/color/48/mysql-logo.png" alt="mysql-logo"/>
                                                    <div className="min-w-0 ml-3 mr-auto">
                                                        <p className="text-2xl font-bold text-black truncate">MySQL</p>

                                                    </div>

                                                </div>
                                                <blockquote class="mt-5">
                                                    <p class="text-base text-gray-800">
                                                        A popular relational database management system known for its reliability, speed, and ease of use in managing structured data with SQL queries.
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>

                                        <div class="overflow-hidden bg-white rounded-md">
                                            <div class="px-5 py-6">
                                                <div class="flex items-center justify-between">
                                                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/angularjs.png" alt="angularjs"/>
                                                    <div class="min-w-0 ml-3 mr-auto">
                                                        <p class="text-2xl font-bold text-black truncate">Angular</p>

                                                    </div>

                                                </div>
                                                <blockquote class="mt-5">
                                                    <p class="text-base text-gray-800">
                                                        A powerful TypeScript-based framework for building dynamic, single-page web applications with a focus on performance and scalability.
                                                    </p>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>


                </section>
            </div>
    )
}

export default AboutMe;