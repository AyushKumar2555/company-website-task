import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsPointer(true);
      }
    };

    const mouseOut = () => setIsPointer(false);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', mouseOver);
    document.addEventListener('mouseout', mouseOut);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', mouseOver);
      document.removeEventListener('mouseout', mouseOut);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-50 transition-transform duration-100 ${
      isPointer ? 'scale-150' : 'scale-100'
    }`} style={{
      transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
    }}></div>
  );
};

export default CustomCursor;