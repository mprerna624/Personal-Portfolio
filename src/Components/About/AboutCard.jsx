import React from 'react';

const AboutCard = ({ 
  title, 
  description, 
  Icon, 
  variant = 'primary', // primary for maroon accent, secondary for amber accent
  circleSize = 'medium',
  className = ''
}) => {
  const getCircleSize = () => {
    switch (circleSize) {
      case 'small': return 'w-24 h-24';
      case 'medium': return 'w-28 h-28';
      case 'large': return 'w-32 h-32';
      default: return 'w-28 h-28';
    }
  };

  const getGradient = () => {
    if (variant === 'primary') {
      return 'from-[var(--maroon)] to-[var(--amber)] dark:from-[var(--amber)] dark:to-[var(--lightYellow)]';
    }
    return 'from-[var(--amber)] to-[var(--lightYellow)]';
  };

  const getBorderColor = () => {
    return variant === 'primary' 
      ? 'border-[var(--maroon)] dark:border-[var(--amber)]' 
      : 'border-[var(--amber)]';
  };

  const getTitleColor = () => {
    return variant === 'primary'
      ? 'text-[var(--maroon)] dark:text-[var(--offWhite)]'
      : 'text-[var(--blue)] dark:text-[var(--offWhite)]';
  };

  const getIconColor = () => {
    return variant === 'primary'
      ? 'text-[var(--maroon)] dark:text-[var(--amber)]'
      : 'text-[var(--amber)]';
  };

  return (
    <div className={`group h-full ${className}`}>
      <div className={`relative h-full overflow-hidden rounded-lg bg-white dark:bg-[var(--blue)] p-6 
                    transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                    border-l-4 ${getBorderColor()}`}
        >
                        
        <div className={`absolute top-0 right-0 ${getCircleSize()} -translate-x-8 -translate-y-8 
                      bg-gradient-to-br ${getGradient()} rounded-full opacity-10 
                      group-hover:scale-150 group-hover:opacity-20
                      transition-all duration-500`}
        ></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <Icon className={`w-6 h-6 ${getIconColor()}`} />
            <h3 className={`text-xl font-semibold ${getTitleColor()}`}>{title}</h3>
          </div>
          <p className="text-[var(--black)] dark:text-[var(--offWhite)]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;