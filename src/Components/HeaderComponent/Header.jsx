import MenuLinks from "../MenuLinks/MenuLinks.jsx";
import image1 from "../../../public/ishini2.png";
import './Header.css';
import {useState} from "react";

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const socialIcons = [
        {
            name: 'facebook',
            path: 'M12 2C6.4889971 2 2 6.4889971 2 12C2 17.511003 6.4889971 22 12 22C17.511003 22 21 17.511003 21 12C21 6.4889971 17.511003 2 12 2zM12 4C16.430123 4 20 7.5698774 20 12C20 16.014467 17.065322 19.313017 13.21875 19.898438L13.21875 14.384766L15.546875 14.384766L15.912109 12.019531L13.21875 12.019531L13.21875 10.726562C13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938L15.935547 8.8710938L15.935547 6.8066406C15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125C11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312L10.654297 12.019531L8.4277344 12.019531L8.4277344 14.384766L10.654297 14.384766L10.654297 19.878906C6.8702905 19.240845 4 15.970237 4 12C4 7.5698774 7.5698774 4 12 4z'
        },
        {
            name: 'instagram',
            path: 'M8 3C5.243 3 3 5.243 3 8L3 16C3 18.757 5.243 21 8 21L16 21C18.757 21 21 18.757 21 16L21 8C21 5.243 18.757 3 16 3L8 3zM8 5L16 5C17.654 5 19 6.346 19 8L19 16C19 17.654 17.654 19 16 19L8 19C6.346 19 5 17.654 5 16L5 8C5 6.346 6.346 5 8 5zM17 6A1 1 0 0 0 16 7A1 1 0 0 0 17 8A1 1 0 0 0 18 7A1 1 0 0 0 17 6zM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7zM12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9z'
        },
        {
            name: 'linkedin',
            path: 'M5 3C3.895 3 3 3.895 3 5L3 19C3 20.105 3.895 21 5 21L19 21C20.105 21 21 20.105 21 19L21 5C21 3.895 20.105 3 19 3L5 3zM5 5L19 5L19 19L5 19L5 5zM7.7792969 6.3164062C6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781C6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969C8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781C9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062zM6.4765625 10L6.4765625 17L9 17L9 10L6.4765625 10zM11.082031 10L11.082031 17L13.605469 17L13.605469 13.173828C13.605469 12.034828 14.418109 11.871094 14.662109 11.871094C14.906109 11.871094 15.558594 12.115828 15.558594 13.173828L15.558594 17L18 17L18 13.173828C18 10.976828 17.023734 10 15.802734 10C14.581734 10 13.930469 10.406562 13.605469 10.976562L13.605469 10L11.082031 10z'
        }
    ];

    const menuLinks = [
        { path: "/", text: "About Me", icon: "person" },
        { path: "/portfolio", text: "Portfolio", icon: "file-earmark-code" },
        { path: "/services", text: "Services", icon: "person" },
        { path: "/contact", text: "Contact", icon: "envelope" }
    ];

    const getIconPath = (iconName) => {
        switch (iconName) {
            case "person":
                return "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z";
            case "file-earmark-code":
                return "M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5zM8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z";
            case "envelope":
                return "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383v5.722z";
            default:
                return "";
        }
    };

    return (
        <>
            {/* Mobile menu button - always visible on mobile */}
            <div className="lg:hidden md:block sm:block -bottom-10 -right-10 z-50">
                <button
                    className="p-2 text-white bg-black rounded-md shadow-md hover:bg-gray-700 transition-all duration-300"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    )}
                </button>
            </div>

            {/* Header content - hidden on mobile by default */}
            <div className={`lg:block ${isMobileMenuOpen ? 'block' : 'hidden'} fixed lg:relative h-screen lg:h-auto bg-white z-10 w-64 lg:w-auto shadow-lg lg:shadow-none`}>
                <div className="flex flex-col items-center px-4 mx-auto h-full sm:px-6 lg:px-8">
                    <nav className="flex flex-col justify-between h-full w-full py-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-40 h-56 mt-4 lg:mt-10 lg:h-40 mx-auto lg:mx-0 transition-all duration-300 hover:scale-105"
                                src={image1}
                                alt="Ishini Charindi"
                            />
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-4">
                            <h1 className="text-xl font-semibold font-serif">Ishini Charindi</h1>
                            <h1 className="text-lg font-medium font-serif">Web Developer</h1>
                        </div>

                        <div className="flex justify-center lg:justify-start gap-3 mt-4 lg:ml-7">
                            {socialIcons.map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="p-2 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110"
                                    aria-label={social.name}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        className="fill-current text-gray-700 hover:text-pink-600 transition-colors duration-300"
                                    >
                                        <path d={social.path}/>
                                    </svg>
                                </a>
                            ))}
                        </div>

                        <div className="my-4 lg:my-5">
                            <hr className="h-0.5 bg-gray-300 rounded-full"/>
                        </div>

                        <div className="flex flex-col items-center lg:items-start space-y-3 lg:space-y-4 lg:ml-3">
                            {menuLinks.map((link) => (
                                <div
                                    key={link.path}
                                    className={`text-base font-medium w-full text-center lg:text-left ${
                                        activeLink === link.path ? "bg-pink-600 text-white" : "text-gray-700 hover:text-white hover:bg-pink-600"
                                    } transition-all duration-300 ease-in-out hover:border hover:border-pink-500 py-2 px-3 rounded-xl cursor-pointer`}
                                    onClick={() => {
                                        setActiveLink(link.path);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    <div className="flex items-center justify-center lg:justify-start">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi mr-2"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d={getIconPath(link.icon)}/>
                                        </svg>
                                        <MenuLinks src={link.path} text={link.text} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className="items-center justify-center px-4 py-3 mt-8 mb-8 lg:mt-20 text-base font-semibold text-white transition-all duration-300 bg-[#36454F] border border-transparent rounded-3xl hover:bg-pink-700 hover:scale-105 mx-auto lg:mx-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-send mr-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                </svg>
                                <span>Hire Me</span>
                            </div>
                        </button>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;