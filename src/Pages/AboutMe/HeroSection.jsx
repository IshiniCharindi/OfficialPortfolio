import image2 from "../../assets/ishini1.png";
import bg2 from "../../assets/bg2.jpg";
import {Link, useNavigate} from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();
    return (
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

                            <button
                                onClick={()=>navigate('/contact')}
                                className="flex items-center justify-center px-6 py-3 text-lg font-semibold text-pink-600 transition-all duration-300 bg-white border border-pink-600 rounded-full hover:bg-pink-50 hover:shadow-lg">
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
    );
};

export default HeroSection;