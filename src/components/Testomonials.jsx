import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Testomonials() {
  return (
    <div>
      <div className="p-8">
        <h1 className="text-center mb-5 text-2xl font-semibold text-white">Testimonials</h1>
        {/* <p className="text-white  text-center font-light font-normal mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
        </p> */}

        <div className="carousel-container">
          <Carousel className="" showStatus={false}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Khalil</h1>
                <h6 className="text-center text-lg text-white font-normal">Web Developer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Mohamed sade</h1>
                <h6 className="text-center text-lg text-white font-normal">App Developer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Jeestoole</h1>
                <h6 className="text-center text-lg text-white font-normal">Web Designer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Khalil</h1>
                <h6 className="text-center text-lg text-white font-normal">Web Developer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Mohamed sade</h1>
                <h6 className="text-center text-lg text-white font-normal">App Developer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
              <div className="color rounded-lg p-8 mx-auto items-center justify-center" data-carousel-item>
                <h1 className="text-center font-bold text-red-500">Jeestoole</h1>
                <h6 className="text-center text-lg text-white font-normal">Web Designer</h6>
                <p className="text-white text-center font-normal mb-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testomonials;