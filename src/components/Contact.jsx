import {React,useState,useNavigate} from 'react';
import { db } from './firebase-config';
import {collection,addDoc} from 'firebase/firestore';

function Contact({isAuth}) {
  // let navigate=useNavigate();
  const [name,setname]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const ContactCollectionRef=collection(db,"Contact");

  const AddContactMessage= async()=>{
    await addDoc(ContactCollectionRef,{
      name,
      email,
      message
    });
    
    alert("You Message has been send")
    // <h1 className='text-white '></h1>
    // navigate("/");
  }
  return (
    <div className='bg-black'>
      <div className='container mx-auto py-10 px-6'>
        <div className='bg-black mx-auto p-8 mt-7 grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='text-white space-y-5'>
            <h1 className='text-white text-2xl font-bold'>
              Let's make something new, different, great together{' '}
              <span className='text-red-500'>just say hello</span>
            </h1>
            <h1 className='font-normal ml-2 text-xl'>
              <i className='fas fa-phone'></i> +252 617 179 442
            </h1>
            <h1 className='font-normal ml-2 text-xl'>
              <i className='fas fa-envelope'></i> Khalilyare8@gmail.com
            </h1>
            <h1 className='font-normal ml-2 text-xl'>
              <i className='fas fa-map-marker-alt'></i> 12 Street 2nd Tower
              <br /> London, UK
            </h1>
          </div>
          <div className='flex md:mx-20 flex-col justify-center'>
            <label className='text-white' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Name here...'
              className='p-2 border-2 hover:border-red-500'
              onChange={(event)=>{setname(event.target.value)}}
            />
            <label className='text-white' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Email here...'
              className='p-2 border-2 hover:border-red-500'
              onChange={(event)=>{setEmail(event.target.value)}}
            />
            <label className='text-white' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='4'
              cols='40'
              className='p-2 border-2 hover:border-red-500'
              onChange={(event)=>{setMessage(event.target.value)}}
            ></textarea>
            <button className='py-2 px-4 mt-2 rounded-lg border-red-500 border-2 bg-red-500 text-white' onClick={AddContactMessage}>
             Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;