import Header from "../../Components/HeaderComponent/Header.jsx";
import "./AboutMe.css"
import image2 from "../../../public/ishini1.png";
import bg2 from "../../../public/bg2.jpg";

const AboutMe = () => {
    return (
        //main about
        <div className="grid grid-cols-5 h-screen">
            <div className="col-span-1">
                <Header/>
            </div>
            <div className="col-span-4">
                {/*bg-gradient-to-t from-[#ab9ea9] to-[#ab9ea9]*/}
                <section className=" pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16" style={{
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-bold leading-tight text-black sm:text-xl lg:text-3xl">Hey,
                                    I
                                    am a </h2><h1 className="text-7xl text-[#36454F] [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)] font-bold leading-tight"><br
                                className="block  sm:hidden"/>Freelancer</h1>
                                <p className="max-w-lg mt-3  leading-relaxed text-gray-600 md:mt-8">I am Ishini
                                    Charindi, a dedicated Web
                                    Designer and Developer from Sri Lanka, committed to delivering exceptional service
                                    to my clients. With a
                                    focus on excellence, I aim to creatae captivating and functional web solutions
                                    tailored to your specific needs.
                                    I invite you to share your requirements with me, confident in my ability to exceed
                                    your expectations through
                                    creativity and technical expertise.</p>

                                <button
                                    className="items-center justify-center px-2 py-2 mt-20 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl lg:inline-flex hover:bg-purple-800">
                                    <table>
                                        <tr>
                                            <td className="px-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                                                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                                                </svg>
                                            </td>
                                            <td className="px-1 py-2">
                                                View Resume
                                            </td>
                                        </tr>
                                    </table>

                                </button>

                    {/*            <p className="mt-4 text-xl text-gray-600 md:mt-8">*/}
                    {/*<span className="relative inline-block">*/}
                    {/*    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>*/}
                    {/*    <span className="relative"> Have a question? </span>*/}
                    {/*</span>*/}
                    {/*                <br className="block sm:hidden"/>Ask me on <a href="#" title=""*/}
                    {/*                                                              className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>*/}
                    {/*            </p>*/}
                            </div>

                            <div className="relative">
                                {/*<img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"*/}
                                {/*     src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"*/}
                                {/*     alt=""/>*/}

                                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                                     src={image2}
                                     alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*what I Do*/}

                <section className="py-10 bg-gray-100 sm:py-16 ">
                    <div className="mx-auto max-w-7xl sm:px-6 ">
                        <div className="mx-auto">
                            <h2 className="text-3xl font-bold  text-black sm:text-4xl lg:text-5xl">What I Do</h2>
                            <table>
                                <tr>
                                    <td>
                                        <p className=" max-w-4xl mx-auto mt-4 text-base leading-relaxed text-gray-600">I’m a passionate and dedicated
                                            web developer at the beginning of my journey in the tech world.<br/>  Below is a quick overview of the technical
                                            skills and technologies I’ve been learning and working with.<br/> Interested in seeing what I can do? </p>
                                    </td>
                                    <td className="px-20">
                                        <button className="items-center justify-center px-2 py-2  text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl lg:inline-flex hover:bg-purple-800">
                                            <table>
                                                <tr>
                                                    <td className="px-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                                        </svg>
                                                    </td>
                                                    <td className="px-2 py-0">
                                                        Services & Pricing
                                                    </td>
                                                </tr>
                                            </table>

                                        </button>
                                    </td>
                                </tr>
                            </table>

                        </div>

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




        </div>
    )
}

export default AboutMe;