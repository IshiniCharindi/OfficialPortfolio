// import ActivityCard from "./ActivityCard";

const ExtracurricularSection = ({ activities }) => {
    // Duplicate activities for infinite loop
    const duplicatedActivities = [...activities, ...activities];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Code</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        I pursue passions beyond coding that shape me into a well-rounded creator and problem-solver
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative h-96">
                    {/* Horizontal Timeline Line */}
                    <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-pink-400 to-indigo-500 transform -translate-y-1/2 z-0"></div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Timeline Items Container */}
                    <div className="relative h-full overflow-hidden">
                        <div className="inline-flex whitespace-nowrap animate-infinite-scroll items-center h-full">
                            {duplicatedActivities.map((activity, index) => (
                                <div key={`activity-${index}`} className="relative flex-shrink-0 px-8 h-full flex items-center">
                                    {/* Timeline Dot with Pulse Animation */}
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                        <div className={`w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-pink-600' : 'bg-indigo-600'} flex items-center justify-center`}>
                                            <div className={`w-3 h-3 rounded-full bg-white animate-pulse ${index % 2 === 0 ? 'animate-ping-pink' : 'animate-ping-indigo'}`}></div>
                                        </div>
                                    </div>

                                    {/* Year Indicator - Now using the actual year from activities */}
                                    <div className={`absolute ${index % 2 === 0 ? 'top-1/4' : 'top-3/4'} left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-bold ${index % 2 === 0 ? 'text-pink-600' : 'text-indigo-600'}`}>
                                        {activity.title} {/* Using the title which contains the year */}
                                    </div>

                                    {/* Card positioned alternately */}
                                    <div className={`relative ${index % 2 === 0 ? '-mt-20' : 'mt-20'} transition-all duration-300 hover:-translate-y-2`}>
                                        <div className="bg-white rounded-lg shadow-md p-4 w-auto text-center">
                                            <p className="text-gray-700">{activity.description}</p>
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