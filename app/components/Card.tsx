import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  // FIX: Add style prop to allow passing inline styles for animations.
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, style }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl shadow-md p-4 transition-all duration-300 flex flex-col ${className} ${onClick ? 'cursor-pointer hover:shadow-lg hover:scale-[1.02]' : ''}`}
    >
      {children}
    </div>
  );
};

export default Card;