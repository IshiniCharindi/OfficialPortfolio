import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <div className="contact">
            <div className="col-span-4">
                <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact Me</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
                                Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to ishinidewamiththa@gmail.com.</p>
                        </div>

                        {state?.selectedPackage && (
                            <div className="max-w-2xl mx-auto mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <h3 className="text-lg font-medium text-green-800">
                                            Package Selected: {state.selectedPackage} (${state.packagePrice})
                                        </h3>
                                        <div className="mt-2 text-sm text-green-700">
                                            <ul className="list-disc pl-5 space-y-1">
                                                {state.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                            <p className="mt-2">
                                                We've pre-filled your message below. Feel free to edit it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                                <div className="overflow-hidden bg-white border rounded-xl">
                                    <div className="p-6">
                                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <p className="mt-6 text-lg font-medium text-gray-900">+94 740138590</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden bg-white border rounded-xl">
                                    <div className="p-6">
                                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <p className="mt-6 text-lg font-medium text-gray-900">ishinidewamiththa@gmail.com</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden bg-white border rounded-xl">
                                    <div className="p-6">
                                        <svg className="flex-shrink-0 w-10 h-10 mx-auto text-pink-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">10,Selligewathta,Ampitiya,<br/>Kandy,SriLanka</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 overflow-hidden bg-white border rounded-xl">
                                <div className="px-6 py-12 sm:p-12">
                                    <h3 className="text-3xl font-semibold text-center text-gray-900">Send me a message</h3>

                                    <form action="#" method="POST" className="mt-14">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                            <div>
                                                <label className="text-base font-medium text-gray-900">Your name</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border-2 bg-gray-50 border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-base font-medium text-gray-900">Email address</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="email" placeholder="Enter your email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-base font-medium text-gray-900">Phone number</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="tel" placeholder="Enter your phone number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="text-base font-medium text-gray-900">Company name</label>
                                                <div className="mt-2.5 relative">
                                                    <input type="text" placeholder="Enter your company name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 border-2 border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-2">
                                                <label className="text-base font-medium text-gray-900">Message</label>
                                                <div className="mt-2.5 relative">
                                                    <textarea name="message" defaultValue={state?.message || ''} className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 border-2 border-gray-500 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="6"></textarea>
                                                </div>
                                            </div>

                                            {state?.selectedPackage && (
                                                <>
                                                    <input type="hidden" name="selectedPackage" value={state.selectedPackage} />
                                                    <input type="hidden" name="packagePrice" value={state.packagePrice} />
                                                </>
                                            )}

                                            <div className="sm:col-span-2">
                                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-md focus:outline-none hover:bg-pink-700 focus:bg-blue-700">
                                                    Send Inquiry
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;