import { useState } from 'react';

const Card = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-[100px] md:w-[180px] overflow-hidden bg-white shadow-card transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[90px] md:h-[170px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full rounded-2xl object-cover transition-transform duration-700 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>

      <div className="p-2">
        <h3 className="text-center font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
