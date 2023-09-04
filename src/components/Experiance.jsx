import React from 'react';

function Experiance() {
  return (
    <div className="mx-16 text-white">
      <div className="grid p-8 grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mx-auto">
          <img src="/img/code.jpg" className="w-75 h-75 rounded" alt="Code" />
        </div>
        <div className="container">
          <h1 className="text-3xl font-semibold mb-5">Reading About My Life Struggle Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text ever since the 1500s,
          </p>
          <h1 className="text-white mt-3 font-normal">Html </h1>
          <div class=" bg-gray-200 rounded-full dark:bg-white">
            <div class="bg-red-500 h-3 text-xs font-medium  text-center text-white p-0.5 leading-none rounded-full " style={{width:'97%'}} > 97%</div>
          </div>

          <h1 className="text-white mt-3 font-normal">Tailwind Css </h1>
          <div class=" bg-gray-200 rounded-full dark:bg-white">
            <div class="bg-red-500 h-3 text-xs font-medium  text-center text-white p-0.5 leading-none rounded-full " style={{width:'94%'}} > 94%</div>
          </div>

          <h1 className="text-white mt-3 font-normal">React </h1>
          <div class=" bg-gray-200 rounded-full dark:bg-white">
            <div class="bg-red-500 h-3 text-xs font-medium  text-center text-white p-0.5 leading-none rounded-full " style={{width:'85%'}} > 85%</div>
          </div>


          <h1 className="text-white mt-3 font-normal">Firebase </h1>
          <div class=" bg-gray-200 rounded-full dark:bg-white">
            <div class="bg-red-500 h-3 text-xs font-medium  text-center text-white p-0.5 leading-none rounded-full " style={{width:'90%'}} > 90%</div>
          </div>

          <div className="flex flex-col md:flex-row mt-3">
            <button className="py-3 rounded-lg mt-3 md:mt-0 border-red-500 border-2 px-5 bg-red-500 font-normal text-white">
              Hire Me!
            </button>
            <button className="py-3 ml-0 mt-3 md:mt-0 md:ml-3 rounded-lg border-red-500 border-2 px-5 hover:bg-red-500 font-normal text-white">
              About Me!
            </button>
          </div>
        </div>
      </div>
      {/* experiance  */}
      <div className="container p-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="mx-auto bg-black rounded-lg hover:bg-red-500 p-8 text-center items-center">
            <h1 className="font-bold text-2xl">50+</h1>
            <h6>Clients</h6>
          </div>
          <div className="mx-auto bg-black rounded-lg hover:bg-red-500 p-8 text-center items-center">
            <h1 className="font-bold text-2xl">68+</h1>
            <h6>Projects</h6>
          </div>
          <div className="mx-auto bg-black rounded-lg hover:bg-red-500 p-8 text-center items-center">
            <h1 className="font-bold text-2xl">30+</h1>
            <h6>Awards</h6>
          </div>
          <div className="mx-auto bg-black rounded-lg hover:bg-red-500 p-8 text-center items-center">
            <h1 className="font-bold text-2xl">03+</h1>
            <h6>Experience</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiance;