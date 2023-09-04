import React from 'react'
import {Link,Outlet} from 'react-router-dom'

function categoryLayout() {
  return (
    <div className="container mx-auto text-white">
     <h1 className="text-center mt-5 mb-3 text-2xl font-semibold text-white">
        My Work
      </h1>
      <p className="text-white text-center font-light font-normal mb-5">
      Web design and web development are crucial components when creating 
      a captivating<br/> portfolio website. A well-designed portfolio website 
      serves as a digital<br/> representation of one's skills, accomplishments, <br/>

     
        
      </p>
    <header className="p-4">
      <nav className="flex justify-center space-x-4">
        <Link
          to="webdevel"
          className="bg-red-500  text-white py-2 px-4 "
        >
          Web Development
        </Link>
        <Link
          to="webdesign"
          className="bg-red-500  text-white py-2 px-4 "
        >
          Web Design
        </Link>
      </nav>
  
    </header>
    <main className="p-4 flex justify-center items-center">
      <Outlet />
    </main>
  </div>
  )
}

export default categoryLayout