import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeDetails from '../components/EmployeeDetails';

function EmployeeDetailsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative p-4">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
        aria-label="Go back"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-blue-500 group-hover:text-blue-700 transition-colors duration-300" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Go Back
        </span>
      </button>
      <h1 className="text-3xl font-bold mb-4 text-center">Employee Details</h1>
      <EmployeeDetails />
    </div>
  );
}

export default EmployeeDetailsPage;