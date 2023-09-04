import React from 'react';
import '../App.css';
import Experiance from './Experiance';
import FAQ from './FAQ ';

function About() {
  return (
    <div className='text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className='flex justify-center'>
          <img src='/img/jestole.png' height={1500}  width={1500} alt='Profile' className='mx-auto' />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl mb-3 font-bold'>ABOUT ME</h1>
          <h1 className='text-xl mb-2 font-semibold'>I'm a Professional Web Developer</h1>
          <p className='font-normal text-justify'>
         Letraset sheets containingLorem Ipsum passages,<br/>Lorem Ipsum is simply dummy text of the Ipsum d dummy <br/>Lorem Ipsum is simply dummy text of the Ipsum d dummy<br/>type specimen book. It has survived not only five centuries,<br/> but also the leap into electronic typesetting, remaining essentially<br/> unchanged. It was popularised in the 1960s with the release of <br/>Letraset sheets containingLorem Ipsum passages,<br/> and more recently with desktop
          </p>
        </div>
      </div>
      
      <Experiance/>

      <FAQ/>
    </div>
  );
}

export default About;