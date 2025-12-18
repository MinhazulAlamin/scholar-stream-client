import React from 'react';
import { useNavigate } from 'react-router';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops, page not found!</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
