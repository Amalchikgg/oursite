import React, { useState, useEffect, useRef } from "react";

const FollowingAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      if (!containerRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - container.left;
      const mouseY = e.clientY - container.top;

      if (
        mouseX >= 0 &&
        mouseX <= container.width &&
        mouseY >= 0 &&
        mouseY <= container.height
      ) {
        setMousePosition({ x: mouseX, y: mouseY });

        const centerX = container.width / 2;
        const centerY = container.height / 2;
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
        const distance = Math.min(
          3,
          Math.sqrt(
            Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
          ) / 15
        );

        setEyePosition({
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-96'>
      <div ref={containerRef} className='relative w-64 h-64 cursor-pointer'>
        {/* Лицо */}
        <div className='absolute inset-0 bg-[#FFE0BD] rounded-full overflow-hidden'>
          {/* Волосы */}
          <div className='absolute -top-4 -left-4 -right-4 h-32 bg-[#2A1B18] rounded-t-[150px]' />
          <div className='absolute top-0 left-1/2 w-16 h-8 bg-[#2A1B18] rounded-b-full transform -translate-x-1/2' />

          {/* Брови */}
          <div className='absolute left-[30%] top-[28%] w-12 h-1.5 bg-[#2A1B18] rounded-full transform -rotate-6' />
          <div className='absolute right-[30%] top-[28%] w-12 h-1.5 bg-[#2A1B18] rounded-full transform rotate-6' />

          {/* Глаза */}
          <div className='absolute left-[35%] top-[32%] w-6 h-8 bg-white rounded-full overflow-hidden'>
            <div
              className='absolute w-4 h-4 bg-[#2A1B18] rounded-full transition-all duration-100'
              style={{
                transform: `translate(${4 + eyePosition.x}px, ${
                  8 + eyePosition.y
                }px)`,
              }}
            />
          </div>
          <div className='absolute right-[35%] top-[32%] w-6 h-8 bg-white rounded-full overflow-hidden'>
            <div
              className='absolute w-4 h-4 bg-[#2A1B18] rounded-full transition-all duration-100'
              style={{
                transform: `translate(${4 + eyePosition.x}px, ${
                  8 + eyePosition.y
                }px)`,
              }}
            />
          </div>

          {/* Нос */}
          <div className='absolute left-1/2 top-[45%] w-6 h-6 bg-[#FFD3B0] rounded-full transform -translate-x-1/2' />

          {/* Веснушки */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className='absolute w-1 h-1 bg-[#FFB182] rounded-full opacity-60'
              style={{
                left: `${45 + Math.sin(i * 1.2) * 15}%`,
                top: `${45 + Math.cos(i * 1.2) * 8}%`,
              }}
            />
          ))}

          {/* Губы */}
          <div className='absolute left-1/2 top-[60%] w-12 h-1 bg-[#FF9B9B] rounded-full transform -translate-x-1/2' />
        </div>
      </div>
    </div>
  );
};

export default FollowingAvatar;
