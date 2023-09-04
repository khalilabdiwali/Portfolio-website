import React from 'react'
import Hero from './Hero'
import Webdevel from './help/webdevel'
import Experiance from './Experiance'
import CategoryLayout from './layout/categoryLayout'
import Testomonials from './Testomonials'
import Services from './Services'
import Blog from './Blog'
function Home() {
  return (
    <div>
    <Hero/>
    <Experiance/>
    {/* <About/> */}
    <CategoryLayout/>
    <Services/>
    
    <Blog/>
    <Testomonials/>
    {/* <ExampleComponent/> */}
    </div>
  )
}

export default Home