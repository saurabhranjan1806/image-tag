import React, { useState } from 'react';

export default function Tag({ text, top, left }) {
  const [display, setDisplay] = useState(false);

  const handleMouseEnter = (e) => {
    console.log({ e });
    setDisplay(true);
  };

  const handleMouseLeave = (e) => {
    console.log({ e });
    setDisplay(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="p-2 bg-slate-600 text-white"
        style={{ visibility: display ? 'visible' : 'hidden' }}
      >
        {text}
      </div>
    </div>
  );
}
