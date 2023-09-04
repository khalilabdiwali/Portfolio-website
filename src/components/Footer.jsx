import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 color py-8">
      <div className="flex justify-center">
        <a
          href="#"
          className="text-gray-500 hover:text-white mx-3 transition-colors duration-300"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-white mx-3 transition-colors duration-300"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-white mx-3 transition-colors duration-300"
        >
          <i className="fab fa-instagram"></i>
        </a>
        
      
      </div>
      <p className='text-white text-center'>&copy; 2023  Sofyo. All rights reserved.</p>

    </footer>
  );
}

export default Footer;