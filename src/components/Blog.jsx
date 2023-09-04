import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8sKrnsRqMv0jOJwfvGWOfTISKhN9nQjZi8LQ7_cXUpRFoBt9pHKIGYicaOluCNE3Rjc&usqp=CAU',
      title: 'Breaking Your Coders Block',
      date: '9-02-2023',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 2,
      image: 'https://www.freecodecamp.org/news/content/images/2021/03/coders-block-tips.jpg',
      title: '5 Extensions for Your Chrome Toolbelt',
      date: 'Date 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    
    {
      id: 3,
      image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1627250406359/hiWoJoEZ_.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
      title: '!Awake: This is Your Brain on Caffeine',
      date: 'Date 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 4,
      image: 'https://www.unite.ai/wp-content/uploads/2023/05/emily-bernal-v9vII5gV8Lw-unsplash.jpg',
      title: '10 Best AI Graphic Design Tools (August 2023)',
      date: '9-02-2023',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 5,
      image: 'https://www.pixelo.net/wp-content/uploads/2018/10/1934823-e1540532501723.jpg',
      title: 'Graphic Design Techniques You Need To Master | Pixelo',
      date: 'Date 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ytGTW9Vg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/cufhvx44o66bb32ll2l8.png',
      title: 'A Quick Dive Into Firebae (Firebase) - DEV Community',
      date: 'Date 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 7,
      image: 'https://www.bairesdev.com/wp-content/uploads/2022/06/Picture6-1.svg',
      title: 'React JS - New world of septemper 2023 Technology',
      date: 'Date 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
    {
      id: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYycdhOw12U8Fv0SxVdg7qerupGWkSb60Cg&usqp=CAU',
      title: 'A History of Computer Programming Languages',
      date: 'Date 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel turpis nec mi varius lacinia.',
    },
  ];

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="blog">
            <h1 className="text-center mt-5 text-2xl font-semibold text-white">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-7">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex cursor-pointer  p-4  flex-col rounded-lg items-center md:items-start py-4">
            <img src={blog.image} alt="Blog Image" className="w-64 h-48 object-cover" />
            <div className="text-center md:text-left">
              <h2 className="text-2xl text-white font-bold hover:text-red-500 mt-2">{blog.title}</h2>
              <p className="text-white mt-1">{currentDate}</p>
              <p className="mt-2 text-white">{blog.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;