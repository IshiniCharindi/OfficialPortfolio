const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={skill.icon}
            alt={skill.title}
            className="w-12 h-12 object-contain"
          />
          <h3 className="ml-4 text-xl font-bold text-gray-900">
            {skill.title}
          </h3>
        </div>
        <p className="text-gray-600">{skill.description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
