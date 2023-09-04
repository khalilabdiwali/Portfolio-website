import React, { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';
import Resume from './myCv.pdf';

function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Specify the desired breakpoint for mobile screens
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className="bg-black h-screen">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col justify-center p-4 md:p-10">
          <h1 className="text-red-500 text-lg font-semibold">I am</h1>
          <TypeAnimation 
            sequence={[
              'Khalil Abdiwali',
              1000,
              'Web Developer',
              1000,
              'Web Designer',
              1000,
              'Full Stack Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            className="text-white font-bold text-4xl md:text-6xl mb-2"
            repeat={Infinity}
          />
          <h1 className="text-red-500 text-lg font-semibold mb-2">Web Developer</h1>
          <p className="text-white md:text-lg font-normal mb-2">
            Lorem ipsum dolor sit amet consectetur. Morbi pellentesque nec arcu in..Elit gravida
            senectus elementum id. Congue eget nascetur nibh at in blandit elit ullamcorper. Id .
            laoreet lobortis dignissim Nisl sit nisl sed hac
          </p>
          <div className="flex">
            <button className="py-3 border-red-500 border-2 px-4 hover:bg-red-500 font-semibold text-white">
              <a target="blank" href={Resume} download > Download CV <i className="fas fa-download ml-2"></i></a>
            </button>
          </div>
        </div>
        {!isMobile && (
          <div className="flex flex-col justify-center md:flex-row md:justify-end">
            <img src="img/odey.png" alt="" className="w-75 md:max-w-none" />
            <div className="flex flex-col md:ml-8 mt-4 md:mt-24 cursor-pointer">
              <div className="flex flex-col">
                <a href="https://www.facebook.com/khaliilabdiwali.31/"><i className="fab fa-facebook hover:text-blue-300 py-2 text-white"></i></a>
                <i className="fab fa-instagram hover:text-rose-300 py-2 text-white"></i>
              </div>
              <div className="flex flex-col">
                <i className="fab fa-behance hover:text-black-300 py-2 text-white"></i>
                <a href="https://web.whatsapp.com/"><i className="fab fa-whatsapp hover:text-blue-300 py-2 text-white"></i></a>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Hero;