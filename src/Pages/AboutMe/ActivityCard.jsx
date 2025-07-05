const ActivityCard = ({ activity }) => {
    return (
        <div className="flex-shrink-0 mx-4 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg"
             style={{ width: "300px" }}>
            <div className="p-6">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
            </div>
        </div>
    );
};

export default ActivityCard;