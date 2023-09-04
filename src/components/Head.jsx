import {React,useState} from 'react'
import {Link ,Outlet} from 'react-router-dom'
function Head() {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className='Head'>
    <div className='flex items-center px-4 md:px-8 lg:px-16 xl:px-20 '>
      <button className='md:hidden m-2 p-4 text-white rounded-md focus-outline-none ' onClick={()=>{setIsOpen(!isOpen)}}>
      {isOpen ? (
        <i className="fas fa-times fa-lg"></i>
      ):(
        <i className="fas fa-bars fa-lg"></i>
      )
      }
      </button>
      </div>
      <header  className={`${isOpen ? "block" : "hidden"} md:block`}>
        <nav className=" flex flex-col md:flex-row items-center justify-between  mt-5  rounded mx-auto">
          <div className="ml-4 cursor-pointer md:ml-14 p-4 md:p-1">
            <h1 className='text-2xl md:text-4xl font-semibold text-white'>SOFYO</h1>
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
    <span class="relative text-white">Web Developer</span>
  </span>
            {/* <span className="text-white">Web developer</span> */}
          </div>
          <div className={`md:flex flex-row ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row text-white md:ml-auto md:mr-14 space-y-4 md:space-y-0 md:space-x-5 text-lg">
              <li className="font-bold text-red-600 hover:translate-x-1 duration-300"><Link to="/">Home</Link></li>
              <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="About">About</Link></li>
              {/* <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="/Contact">Contact</Link></li> */}
              {/* <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="/Pricing">PRICING</Link></li> */}
              <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="Blog">Blog</Link></li>
              <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="Category">Category</Link></li>
              <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="Contact">Contact</Link></li>
              <li className="font-bold hover:text-red-600 hover:translate-x-1 duration-300"><Link to="login">Login</Link></li>
             
            </ul>
           
          </div>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>

  )
}

export default Head