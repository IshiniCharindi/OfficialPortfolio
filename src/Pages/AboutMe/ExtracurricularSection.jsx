const ExtracurricularSection = ({ activities }) => {
    // Duplicate activities for infinite loop
    const duplicatedActivities = [...activities, ...activities, ...activities];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Code</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        I pursue passions beyond coding that shape me into a well-rounded creator and problem-solver
                    </p>
                </div>

                {/* Vertical Timeline Container with Infinite Scroll */}
                <div className="relative h-[600px] overflow-hidden">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-indigo-500 transform -translate-x-1/2 z-0"></div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>

                    {/* Timeline Items with Infinite Scroll Animation */}
                    <div className="animate-vertical-scroll">
                        <div className="space-y-12">
                            {duplicatedActivities.map((activity, index) => (
                                <div
                                    key={`activity-${index}`}
                                    className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} group`}
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2 -ml-3' : 'right-1/2 -mr-3'} w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-pink-600' : 'bg-indigo-600'} z-10 transform -translate-y-1/2 flex items-center justify-center`}>
                                        <div className={`w-3 h-3 rounded-full bg-white animate-pulse ${index % 2 === 0 ? 'animate-ping-pink' : 'animate-ping-indigo'}`}></div>
                                    </div>

                                    {/* Activity Card */}
                                    <div className={`w-full md:w-5/12 p-4 transition-all duration-300 transform group-hover:scale-105 ${index % 2 === 0 ? 'mr-auto pr-10 md:pr-16' : 'ml-auto pl-10 md:pl-16'}`}>
                                        <div className={`bg-white rounded-xl shadow-lg overflow-hidden border-l-4 ${index % 2 === 0 ? 'border-pink-500' : 'border-indigo-500'}`}>
                                            <div className="p-6">
                                                <div className={`text-2xl font-bold mb-2 ${index % 2 === 0 ? 'text-pink-600' : 'text-indigo-600'}`}>
                                                    {activity.title}
                                                </div>
                                                <p className="text-gray-700 text-lg">
                                                    {activity.description}
                                                </p>
                                            </div>
                                            <div className={`px-6 py-3 bg-gradient-to-r ${index % 2 === 0 ? 'from-pink-50 to-white' : 'from-indigo-50 to-white'}`}>
                                                <svg
                                                    className={`w-6 h-6 ${index % 2 === 0 ? 'text-pink-500' : 'text-indigo-500'}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtracurricularSection;