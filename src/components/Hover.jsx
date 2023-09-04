import React, { useState } from 'react';

function Hover() {
  const [activeColumn, setActiveColumn] = useState(null);

  const handleColumnClick = (index) => {
    setActiveColumn(index === activeColumn ? null : index);
  };

  return (
    <div className='container p-7'>
      <div className='grid grid-cols-4 gap-4'>
        <div
          className={`relative mx-auto bg-black rounded-lg p-8 text-center items-center ${
            activeColumn === 0 ? 'hover:bg-red-500' : ''
          }`}
          onClick={() => handleColumnClick(0)}
        >
          <h1 className='font-bold text-2xl'>50+</h1>
          <h6 className={`absolute top-0 left-full ml-4 opacity-0 transition-opacity ${activeColumn === 0 ? 'opacity-100' : ''}`}>
            Clients
          </h6>
        </div>
        <div
          className={`relative mx-auto bg-black rounded-lg p-8 text-center items-center ${
            activeColumn === 1 ? 'hover:bg-red-500' : ''
          }`}
          onClick={() => handleColumnClick(1)}
        >
          <h1 className='font-bold text-2xl'>68+</h1>
          <h6 className={`absolute top-0 right-full mr-4 opacity-0 transition-opacity ${activeColumn === 1 ? 'opacity-100' : ''}`}>
            Projects
          </h6>
        </div>
        <div
          className={`relative mx-auto bg-black rounded-lg p-8 text-center items-center ${
            activeColumn === 2 ? 'hover:bg-red-500' : ''
          }`}
          onClick={() => handleColumnClick(2)}
        >
          <h1 className='font-bold text-2xl'>30+</h1>
          <h6 className={`absolute bottom-0 left-full ml-4 opacity-0 transition-opacity ${activeColumn === 2 ? 'opacity-100' : ''}`}>
            Awards
          </h6>
        </div>
        <div
          className={`relative mx-auto bg-black rounded-lg p-8 text-center items-center ${
            activeColumn === 3 ? 'hover:bg-red-500' : ''
          }`}
          onClick={() => handleColumnClick(3)}
        >
          <h1 className='font-bold text-2xl'>03+</h1>
          <h6 className={`absolute bottom-0 right-full mr-4 opacity-0 transition-opacity ${activeColumn === 3 ? 'opacity-100' : ''}`}>
            Experience
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Hover;