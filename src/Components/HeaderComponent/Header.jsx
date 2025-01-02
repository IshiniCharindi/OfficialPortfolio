import MenuLinks from "../MenuLinks/MenuLinks.jsx";
import image1 from "../../../public/ishini2.png"
import './Header.css'

const Header = () => {
    return (
        <div className="mainHeader">
            {/*bg-gradient-to-t from-[#c69abd] to-[#c69abd]*/}
            <header className="ml-8 h-screen">
                <div className="flex flex-col items-center  px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/*// <!-- lg+ -->*/}
                    <nav className="flex  flex-col  justify-between h-50 lg:max-h-full">
                        <div className="flex-shrink-0">
                                <img className="flex align-middle w-40 h-56 mt-10 lg:h-40"
                                     src={image1}/>

                        </div>
                        <div className="flex flex-col align-middle">
                            <h1 className=" text-xl font-semibold font-serif">Ishini Charindi</h1>
                            <h1 className="ml-6 text-l font-medium font-serif">Web Developer</h1>
                        </div>

                        <div className="flex align-middle mt-5 ml-7 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.014467 17.065322 19.313017 13.21875 19.898438 L 13.21875 14.384766 L 15.546875 14.384766 L 15.912109 12.019531 L 13.21875 12.019531 L 13.21875 10.726562 C 13.21875 9.7435625 13.538984 8.8710938 14.458984 8.8710938 L 15.935547 8.8710938 L 15.935547 6.8066406 C 15.675547 6.7716406 15.126844 6.6953125 14.089844 6.6953125 C 11.923844 6.6953125 10.654297 7.8393125 10.654297 10.445312 L 10.654297 12.019531 L 8.4277344 12.019531 L 8.4277344 14.384766 L 10.654297 14.384766 L 10.654297 19.878906 C 6.8702905 19.240845 4 15.970237 4 12 C 4 7.5698774 7.5698774 4 12 4 z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
                            </svg>
                        </div>

                        <div>
                            <hr className="h-0.5 bg-black my-5 -mx-4 rounded-full"/>

                        </div>
                        <button type="button"
                                className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {/*// <!-- Menu open: "hidden", Menu closed: "block" -->*/}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 8h16M4 16h16"/>
                            </svg>

                            {/*// <!-- Menu open: "block", Menu closed: "hidden" -->*/}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 8h16M4 16h16"/>
                            </svg>
                        </button>

                        <div className=" flex flex-col items-start space-y-4">
                            <div
                                className="text-base font-medium text-black transition-all duration-200 hover:text-white hover:bg-purple-950 hover:border hover:border-purple-950 hover:py-1 hover:px-3 rounded-3xl focus:*">
                                <table>
                                    <tr>
                                        <td className="px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <MenuLinks src="/" text="About Me"/>
                                        </td>
                                    </tr>
                                </table>


                            </div>
                            <div
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <table>
                                    <tr>
                                        <td className="px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-code" viewBox="0 0 16 16">
                                                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                                                <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <MenuLinks src="/portfolio" text="Portfolio"/>
                                        </td>
                                    </tr>
                                </table>


                            </div>

                            <div
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <table>
                                    <tr>
                                        <td className="px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <MenuLinks src="/services" text="Services & Pricing"/>
                                        </td>
                                    </tr>
                                </table>


                            </div>
                            <div
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <table>
                                    <tr>
                                        <td className="px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-text" viewBox="0 0 16 16">
                                                <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                                                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <MenuLinks src="/resume" text="Resume"/>
                                        </td>
                                    </tr>
                                </table>


                            </div>
                            <div
                                className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                                <table>
                                    <tr>
                                        <td className="px-2 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <MenuLinks src="/contact" text="Contact"/>
                                        </td>
                                    </tr>
                                </table>


                            </div>

                        </div>
                        <button className="items-center justify-center px-2 py-2 mt-20 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl lg:inline-flex hover:bg-purple-800">
                           <table>
                               <tr>
                                   <td className="px-1 ">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                           <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                       </svg>
                                   </td>
                                   <td className="px-2 py-0 ">
                                       Hire Me
                                   </td>
                               </tr>
                           </table>

                        </button>
                    </nav>

                    {/*// <!-- xs to lg -->*/}
                    {/*<nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">*/}
                    {/*    <div className="flow-root">*/}
                    {/*        <div className="flex flex-col px-6 -my-2 space-y-1">*/}
                    {/*            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>*/}

                    {/*            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>*/}

                    {/*            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>*/}

                    {/*            <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div class="px-6 mt-6">*/}
                    {/*        <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>*/}
                    {/*    </div>*/}
                    {/*</nav>*/}
                </div>
            </header>


        </div>

    )
}

export default Header;