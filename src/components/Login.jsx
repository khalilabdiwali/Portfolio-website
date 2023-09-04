import React from 'react';
import {Link} from 'react-router-dom'
import SignIn from './SignIn';
function Login() {
  const handleGoogleLogin = () => {
    // Implement your Google login logic here
  };

  const handleFacebookLogin = () => {
    // Implement your Facebook login logic here
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <div className="bg-white p-8 px-12 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
       
        <form onSubmit={handleLoginFormSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            type="submit"
            className="bg-red-500 ml-2 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mb-4"
            onClick={handleGoogleLogin}
          >
             Google
          </button>
         
        <div className="mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4"
            onClick={handleFacebookLogin}
          >
          <Link to="/SignIn">Register Now</Link>
           
          </button>
        </div>
     
       
        </form>
      </div>
    </div>
  );
}

export default Login;