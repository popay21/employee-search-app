import React, { useContext } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';

function EmployeeCard({ employee, index }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { isFavorite, toggleFavorite } = useContext(EmployeeContext);

  const favoriteStatus = isFavorite(employee);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={employee.picture.thumbnail} alt={`${employee.name.first} ${employee.name.last}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-center mb-2">{`${employee.name.first} ${employee.name.last}`}</h2>
      <p className="text-gray-600 text-center">Age: {employee.dob.age}</p>
      <p className="text-gray-600 text-center mb-4">{`${employee.location.city}, ${employee.location.country}`}</p>
      <Link 
        to={`/employee/?company=${search}&index=${index}`} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out block text-center mb-2"
      >
        More Details
      </Link>
      <button 
        onClick={() => toggleFavorite(employee)}
        className={`${
          favoriteStatus ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
        } text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full`}
      >
        {favoriteStatus ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default EmployeeCard;