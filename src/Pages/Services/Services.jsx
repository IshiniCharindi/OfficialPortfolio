import { useNavigate } from "react-router-dom";
import service1 from "../../assets/service1.jpg";

const Services = () => {
    const navigate = useNavigate();

    const handlePackageSelect = (packageName, packagePrice, features) => {
        navigate('/contact', {
            state: {
                selectedPackage: packageName,
                packagePrice: packagePrice,
                features: features,
                message: `I'm interested in the ${packageName} package ($${packagePrice}). Features I need:\n${features.join('\n')}\n\nPlease contact me to discuss further.`
            }
        });
    };

    const basicFeatures = [
        "Functional Website",
        "1 page",
        "Content Upload",
        "5-Day Delivery",
        "1 Revision"
    ];

    const standardFeatures = [
        "Functional Website",
        "5 pages",
        "Content Upload",
        "10-Day Delivery",
        "2 Revisions"
    ];

    const premiumFeatures = [
        "Functional Website",
        "10 pages",
        "Content Upload",
        "21-Day Delivery",
        "3 Revisions"
    ];

    return (
        <div className="services">
            <div className="col-span-4">
                <section className="py-10 bg-[#fdfdfd] sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold text-center leading-tight text-black sm:text-4xl lg:text-5xl">Services & Pricing</h2>
                    <p className="mx-auto mt-4 text-base text-center leading-relaxed text-gray-600">I have 5+ years of development experience building software for the web and mobile devices. You can take a look at my online <br/> resume and project portfolio to find out more about my skills and experiences.</p>
                    <div className="grid place-items-center">
                        <button className="items-center justify-center px-2 py-2 mt-5 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl lg:inline-flex hover:bg-pink-700">
                            <table>
                                <tr>
                                    <td className="px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                        </svg>
                                    </td>
                                    <button onClick={()=>navigate('/contact')}>
                                        <td className="px-2 py-0">
                                            Hire Me
                                        </td>
                                    </button>
                                </tr>
                            </table>
                        </button>
                    </div>
                </section>

                <section className="py-10 -mt-16 bg-white sm:py-16 lg:py-24" style={{
                    backgroundImage: `url(${service1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="mx-auto">
                            <h2 className="text-3xl -mt-20 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Service Packages</h2>
                            <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600">Explore the range of services I provide to help bring your projects to life. From initial concept to <br/>final delivery, I am committed to delivering high-quality results tailored to your needs.</p>
                        </div>

                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                                <div className="p-8 xl:px-12">
                                    <h3 className="text-xl font-bold text-pink-700">Basic</h3>
                                    <p className="text-5xl font-bold text-black mt-7">$80</p>
                                    <h3 className="mt-3 font-bold text-black-600">Starter Website</h3>
                                    <p className="mt-3 text-bold text-gray-600">A simple, one-page static website for showcasing your business or personal brand.</p>
                                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                        {basicFeatures.map((feature, index) => (
                                            <li key={index} className="inline-flex items-center space-x-2">
                                                <svg className="flex-shrink-0 w-5 h-5 text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-base font-medium text-gray-900">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a onClick={() => handlePackageSelect("Basic", 80, basicFeatures)} className="inline-flex items-center justify-center px-10 py-2 mt-10 text-base font-semibold text-white transition-all duration-200 bg-pink-700 rounded-3xl hover:bg-blue-700 focus:bg-blue-700 cursor-pointer">Choose Basic</a>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-lg">
                                <div className="p-8 xl:px-12">
                                    <h3 className="text-xl font-bold text-pink-600">Standard</h3>
                                    <p className="text-5xl font-bold text-black mt-7">$200</p>
                                    <h3 className="mt-3 text-base font-bold text-black-600">Multi-Page Website</h3>
                                    <p className="mt-3 text-bold text-gray-600">A professional multi-page website for businesses or personal portfolios.</p>
                                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                        {standardFeatures.map((feature, index) => (
                                            <li key={index} className="inline-flex items-center space-x-2">
                                                <svg className="flex-shrink-0 w-5 h-5 text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-base font-medium text-gray-900">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a onClick={() => handlePackageSelect("Standard", 200, standardFeatures)} className="inline-flex items-center justify-center px-10 py-2 mt-10 text-base font-semibold text-white transition-all duration-200 rounded-3xl bg-gradient-to-r from-fuchsia-600 to-pink-700 hover:opacity-80 focus:opacity-80 cursor-pointer">Choose Standard</a>
                                </div>
                            </div>

                            <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md">
                                <div className="p-8 xl:px-12">
                                    <h3 className="text-xl font-bold text-pink-700">Premium</h3>
                                    <p className="text-5xl font-bold text-black mt-7">$350</p>
                                    <p className="mt-3 text-base font-bold text-black-600">Full-Featured Dynamic Website</p>
                                    <p className="mt-3 text-bold text-gray-600">A fully customized, dynamic website tailored to your business or project needs.</p>
                                    <ul className="inline-flex flex-col items-start space-y-5 text-left mt-9">
                                        {premiumFeatures.map((feature, index) => (
                                            <li key={index} className="inline-flex items-center space-x-2">
                                                <svg className="flex-shrink-0 w-5 h-5 text-pink-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-base font-medium text-gray-900">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a onClick={() => handlePackageSelect("Premium", 350, premiumFeatures)} className="inline-flex items-center justify-center px-10 py-2 mt-10 text-base font-semibold text-white transition-all duration-200 bg-pink-700 rounded-3xl hover:bg-blue-700 focus:bg-blue-700 cursor-pointer">Choose Premium</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-10 bg-[#fdfdfd] sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold text-center leading-tight text-black sm:text-4xl lg:text-5xl">Want to hire me for custom package?</h2>
                    <p className="mx-auto mt-4 text-base text-center leading-relaxed text-gray-600">I offer flexible custom packages designed to meet your unique needs. Unlike pre-arranged options, custom packages let you choose specific <br/> features and services that fit your vision. Let's work together to create something perfect for you!</p>
                    <div className="grid place-items-center">
                        <button className="items-center justify-center px-2 py-2 mt-5 text-base font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-3xl lg:inline-flex hover:bg-pink-700">
                            <table>
                                <tr>
                                    <td className="px-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                                        </svg>
                                    </td>
                                    <button onClick={()=>navigate('/contact')}>
                                        <td className="px-2 py-0">
                                            Hire Me
                                        </td>
                                    </button>
                                </tr>
                            </table>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Services;