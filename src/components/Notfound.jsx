import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="flex flex-col text-red-500 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg">The requested page could not be found.</p>
      </div>
    );
  }
}

export default NotFound;