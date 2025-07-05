import ActivityCard from "./ActivityCard";

const ExtracurricularSection = ({ activities }) => {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Beyond Coding</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600">
                        My passions and interests that shape me as a well-rounded individual
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-pink-50 to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-indigo-50 to-transparent z-10"></div>

                    <div className="overflow-hidden py-4">
                        <div className="inline-flex whitespace-nowrap animate-infinite-scroll">
                            {activities.map((activity, index) => (
                                <ActivityCard key={index} activity={activity} />
                            ))}
                            {/* Duplicate for seamless looping */}
                            {activities.map((activity, index) => (
                                <ActivityCard key={`duplicate-${index}`} activity={activity} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExtracurricularSection;