import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleSignInWithGoogle = () => {
    // Handle sign-in with Google logic here
  };

  const handleSignInWithFacebook = () => {
    // Handle sign-in with Facebook logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="max-w-md w-full p-6 bg-red-500 text-white rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none"
          >
            Sign In
          </button>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 px-4 bg-red-600 text-white font-semibold rounded hover:bg-red-700 focus:outline-none"
              onClick={handleSignInWithGoogle}
            >
              <i className="fab fa-google mr-2"></i> Sign in with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-2 px-4 ml-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none"
              onClick={handleSignInWithFacebook}
            >
              <i className="fab fa-facebook-square mr-2"></i> Sign in with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;