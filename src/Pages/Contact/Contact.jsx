import { useLocation } from 'react-router-dom';
import Toast from "../../Components/Toast.jsx";
import { useState } from "react";
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    },
    hover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }
};

const Contact = () => {
    const location = useLocation();
    const { state } = location;
    const [toast, setToast] = useState({ show: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            phone: e.target[2].value,
            company: e.target[3].value,
            message: e.target[4].value,
            selectedPackage: state?.selectedPackage || '',
            packagePrice: state?.packagePrice || '',
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            setToast({
                show: true,
                message: data.message || 'Your message has been sent successfully!',
                type: 'success'
            });

            e.target.reset();

            setTimeout(() => {
                setToast({ show: false, message: '', type: '' });
            }, 5000);

        } catch (err) {
            setToast({
                show: true,
                message: 'Something went wrong. Please try again.',
                type: 'error'
            });

            setTimeout(() => {
                setToast({ show: false, message: '', type: '' });
            }, 5000);
        }
    };

    return (
        <div className="contact">
            {toast.show && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25 }}
                >
                    <Toast
                        message={toast.message}
                        type={toast.type}
                        onClose={() => setToast({ show: false, message: '', type: '' })}
                    />
                </motion.div>
            )}

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-6 sm:py-10 lg:py-16 bg-gray-100"
            >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    {/* Header Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl mx-auto text-center"
                    >
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl"
                        >
                            Contact Me
                        </motion.h2>
                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl mx-auto mt-3 text-sm leading-relaxed text-gray-500 sm:text-base"
                        >
                            Interested in hiring me for your project or just want to say hi?
                            You can fill in the contact form below or send me an email to
                            ishinidewamiththa@gmail.com.
                        </motion.p>
                    </motion.div>

                    {/* Package Selected Notification */}
                    {state?.selectedPackage && (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="max-w-2xl mx-auto mb-6 p-4 sm:p-6 sm:mb-8 bg-pink-50 border-l-4 border-green-500 rounded-lg"
                        >
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-base font-medium text-green-800 sm:text-lg">
                                        Package Selected: {state.selectedPackage} (${state.packagePrice})
                                    </h3>
                                    <div className="mt-1 text-xs text-green-700 sm:text-sm">
                                        <ul className="list-disc pl-4 space-y-0.5 sm:space-y-1">
                                            {state.features.map((feature, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ x: -10, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    {feature}
                                                </motion.li>
                                            ))}
                                        </ul>
                                        <p className="mt-1 sm:mt-2">
                                            We've pre-filled your message below. Feel free to edit it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* Contact Info Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="max-w-5xl mx-auto mt-8 sm:mt-12"
                    >
                        <div className="grid grid-cols-1 gap-4 px-4 text-center md:px-0 md:grid-cols-3 sm:gap-6">
                            {/* Phone Card */}
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                className="overflow-hidden bg-white border rounded-lg sm:rounded-xl"
                            >
                                <div className="p-4 sm:p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="flex-shrink-0 w-8 h-8 mx-auto text-pink-700 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </motion.div>
                                    <p className="mt-4 text-base font-medium text-gray-900 sm:text-lg">+94 740138590</p>
                                </div>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                className="overflow-hidden bg-white border rounded-lg sm:rounded-xl"
                            >
                                <div className="p-4 sm:p-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg className="flex-shrink-0 w-8 h-8 mx-auto text-pink-700 sm:w-10 sm:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </motion.div>
                                    <p className="mt-4 text-base font-medium text-gray-900 sm:text-lg break-all px-2">
                                        ishinidewamiththa@gmail.com
                                    </p>
                                </div>
                            </motion.div>

                            {/* Address Card */}
                            <motion.div
                                variants={itemVariants}
                                whileHover="hover"
                                className="overflow-hidden bg-white border rounded-lg sm:rounded-xl h-full"
                            >
                                <div className="p-4 sm:p-6 h-full flex flex-col">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <svg
                                            className="flex-shrink-0 w-8 h-8 mx-auto text-pink-700 sm:w-10 sm:h-10"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </motion.div>
                                    <div className="mt-4 flex-1 overflow-hidden">
                                        <p className="text-base font-medium text-gray-900 sm:text-lg break-words whitespace-pre-line overflow-ellipsis overflow-hidden">
                                            10, Selligewaththa, Ampitiya, Kandy, Sri Lanka
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 overflow-hidden bg-white border rounded-lg sm:rounded-xl sm:mt-8"
                        >
                            <div className="px-4 py-8 sm:px-6 sm:py-12">
                                <motion.h3
                                    whileHover={{ scale: 1.02 }}
                                    className="text-xl font-semibold text-center text-gray-900 sm:text-2xl md:text-3xl"
                                >
                                    Send me a message
                                </motion.h3>

                                <form onSubmit={handleSubmit} className="mt-8 sm:mt-12">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
                                        {['name', 'email', 'phone', 'company'].map((field, index) => (
                                            <motion.div
                                                key={field}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                            >
                                                <label className="text-sm font-medium text-gray-900 sm:text-base">
                                                    {field === 'name' && 'Your name'}
                                                    {field === 'email' && 'Email address'}
                                                    {field === 'phone' && 'Phone number'}
                                                    {field === 'company' && 'Company name'}
                                                </label>
                                                <div className="mt-1.5 sm:mt-2.5 relative">
                                                    <input
                                                        type={
                                                            field === 'email' ? 'email' :
                                                                field === 'phone' ? 'tel' : 'text'
                                                        }
                                                        placeholder={
                                                            field === 'name' ? 'Enter your full name' :
                                                                field === 'email' ? 'Enter your email' :
                                                                    field === 'phone' ? 'Enter your phone number' :
                                                                        'Enter your company name'
                                                        }
                                                        className="block w-full px-3 py-3 text-sm text-black placeholder-gray-500 transition-all duration-200 border-2 bg-gray-50 border-gray-500 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 sm:px-4 sm:py-3.5 sm:text-base"
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="sm:col-span-2"
                                        >
                                            <label className="text-sm font-medium text-gray-900 sm:text-base">Message</label>
                                            <div className="mt-1.5 sm:mt-2.5 relative">
                                                <textarea
                                                    name="message"
                                                    defaultValue={state?.message || ''}
                                                    className="block w-full px-3 py-3 text-sm text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 border-2 border-gray-500 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600 sm:px-4 sm:py-3.5 sm:text-base"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </motion.div>

                                        {state?.selectedPackage && (
                                            <>
                                                <input type="hidden" name="selectedPackage" value={state.selectedPackage} />
                                                <input type="hidden" name="packagePrice" value={state.packagePrice} />
                                            </>
                                        )}

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="sm:col-span-2"
                                        >
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="inline-flex items-center justify-center w-full px-4 py-3 mt-1 text-sm font-semibold text-white transition-all duration-200 bg-[#36454F] border border-transparent rounded-md focus:outline-none hover:bg-pink-700 focus:bg-blue-700 sm:py-3.5 sm:text-base sm:mt-2"
                                            >
                                                Send Inquiry
                                            </motion.button>
                                        </motion.div>
                                    </div>
                                </form>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Contact;