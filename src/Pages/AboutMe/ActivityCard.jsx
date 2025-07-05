
const ActivityCard = ({ activity }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 w-auto transform transition-all duration-300 hover:shadow-xl">
            <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{activity.title}</h3>
                <p className="text-gray-600 text-sm text-center flex-g-1">
                    {activity.description}
                </p>
            </div>
        </div>
    );
};

export default ActivityCard;