import React from "react";
import { Link } from "react-router-dom";

const Webdevel = ({ projectImage }) => {
  return (
    <div className="relative p-4 bg-slate-100 rounded-lg mx-auto">
      <img src={projectImage} alt="Portfolio 1" width={290} />
      <div className="absolute inset-0 bg-black opacity-0 transition duration-300"></div>
    </div>
  );
};

const Webdevels = () => {
  const WebdevelData = [
    {
      projectImage: "/img/w1.jpg",
    },
    {
      projectImage: "/img/w2.jpg",
    },
    {
      projectImage: "/img/w3.jpg",
    },
    {
      projectImage: "/img/w2.jpg",
    },
    {
      projectImage: "/img/w3.jpg",
    },
    {
      projectImage: "/img/w3.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-6">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-7">
        {WebdevelData.map((data, index) => (
          <div key={index} className="px-6 py-8">
            <Webdevel projectImage={data.projectImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Webdevels;