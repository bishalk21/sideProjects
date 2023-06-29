import React, { useState } from 'react';

function Duck() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  function handleMouseDown(event) {
    const startX = event.pageX - position.x;
    const startY = event.pageY - position.y;

    function handleMouseMove(event) {
      const newX = event.pageX - startX;
      const newY = event.pageY - startY;
      setPosition({ x: newX, y: newY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    });
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease',
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        style={{
          width: '100px',
          height: '80px',
          borderRadius: '50% / 40%',
          backgroundColor: 'yellow',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'orange',
            position: 'absolute',
            top: '15px',
            right: '-20px',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Duck;
