import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function EmployeeDetails() {
  const [searchParams] = useSearchParams();
  const company = searchParams.get('company');
  const index = parseInt(searchParams.get('index'));

  const { employees, isFavorite, toggleFavorite, searchEmployees } = useContext(EmployeeContext);
  const employee = employees[index];

  useEffect(() => {
    if (!employee && company) {
      searchEmployees(company);
    }
  }, [employee, company, searchEmployees]);

  if (!employee) return <div>Loading...</div>;

  const favoriteStatus = isFavorite(employee);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{`${employee.name.first} ${employee.name.last}`}</h2>
      <img src={employee.picture.large} alt={`${employee.name.first} ${employee.name.last}`} className="w-48 h-48 rounded-full mx-auto mb-4" />
      <p className="text-gray-600 mb-2">Email: {employee.email}</p>
      <p className="text-gray-600 mb-2">Phone: {employee.phone}</p>
      <p className="text-gray-600 mb-4">Address: {`${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.country}`}</p>
      
      <div className="h-64 mb-4">
        <MapContainer center={[employee.location.coordinates.latitude, employee.location.coordinates.longitude]} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[employee.location.coordinates.latitude, employee.location.coordinates.longitude]}>
            <Popup>{`${employee.name.first} ${employee.name.last}`}</Popup>
          </Marker>
        </MapContainer>
      </div>

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

export default EmployeeDetails;