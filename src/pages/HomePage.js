import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import { EmployeeContext } from '../contexts/EmployeeContext';

function HomePage() {
  const { loading, error } = useContext(EmployeeContext);

  return (
    <div>
      {/* Image Strip */}
      <div className="relative h-64 mb-8">
        <img 
          src="/images/cover.jpg" 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Employee Search</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <SearchBar />
        {loading && (
          <div className="flex justify-center items-center mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="ml-2 text-blue-500">Loading...</p>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        <EmployeeList />
      </div>
    </div>
  );
}

export default HomePage;