import React from 'react';

function Services() {
  return (
    <div>
      <h1 className="text-center mb-5 m-7 text-2xl font-semibold text-white">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-7">
        <div className="text-white color mx-auto p-7 rounded">
          <img src="img/coding.png"  className='mx-auto' height={80} width={80} alt="Web Design" />
          <h1 className="text-2xl mb-3 font-semibold text-center mt-4">Web Design</h1>
          <p className="text-center">
            Web design and web development are crucial components when creating a captivating portfolio website. A
            well-designed portfolio website
          </p>
        </div>
        <div className="text-white color mx-auto p-7 rounded">
          <img src="img/design.png" height={80} width={80} className='mx-auto' alt="Web Design" />
          <h1 className="text-2xl mb-3 font-semibold text-center mt-4">Graphic Design</h1>
          <p className="text-center">
            Web design and web development are crucial components when creating a captivating portfolio website. A
            well-designed portfolio website
          </p>
        </div>
        <div className="text-white color mx-auto p-7 rounded">
          <img src="img/calendar.png"  className='mx-auto' height={80} width={80} alt="Web Design" />
          <h1 className="text-2xl mb-3 font-semibold text-center mt-4">24/7 Available</h1>
          <p className="text-center">
            Web design and web development are crucial components when creating a captivating portfolio website. A
            well-designed portfolio website
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;