const Card = ({
  title,
  description,
  icon,
  image,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${className}`}>
      {icon && (
        <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      )}
      {image && (
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;