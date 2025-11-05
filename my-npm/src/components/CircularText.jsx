import { useState } from 'react';

const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const letters = Array.from(text);

  const getAnimationDuration = () => {
    if (!isHovered) return spinDuration;
    
    switch (onHover) {
      case 'slowDown':
        return spinDuration * 2;
      case 'speedUp':
        return spinDuration / 4;
      case 'pause':
        return 0;
      case 'goBonkers':
        return spinDuration / 20;
      default:
        return spinDuration;
    }
  };

  const duration = getAnimationDuration();
  const scale = isHovered && onHover === 'goBonkers' ? 0.8 : 1;

  return (
    <div
      className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative text-white font-black text-center cursor-pointer ${className}`}
      style={{
        animation: duration > 0 ? `spin ${duration}s linear infinite` : 'none',
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) scale(${scale}); }
          to { transform: rotate(360deg) scale(${scale}); }
        }
      `}</style>
      
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const radius = 80;
        const angle = (Math.PI * 2 * i) / letters.length;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg + 90}deg)`;

        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-2xl"
            style={{ 
              transform,
              WebkitTransform: transform
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;