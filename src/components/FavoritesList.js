import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';

function FavoritesList() {
  const { favorites, toggleFavorite } = useContext(EmployeeContext);

  if (favorites.length === 0) {
    return <p className="text-center text-gray-600">No favorite employees yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favorites.map(employee => (
        <div key={employee.login.uuid} className="bg-white shadow-md rounded-lg p-4">
          <img src={employee.picture.thumbnail} alt={`${employee.name.first} ${employee.name.last}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">{`${employee.name.first} ${employee.name.last}`}</h3>
          <p className="text-gray-600 text-center mb-2">Age: {employee.dob.age}</p>
          <p className="text-gray-600 text-center mb-4">{`${employee.location.city}, ${employee.location.country}`}</p>
          <Link 
            to={`/employee/?company=${employee.login.username}&index=${favorites.indexOf(employee)}`} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out block text-center mb-2"
          >
            More Details
          </Link>
          <button 
            onClick={() => toggleFavorite(employee)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out w-full"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;