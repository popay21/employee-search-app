import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeList from '../components/EmployeeList';
import { EmployeeContext } from '../contexts/EmployeeContext';

function CompanyEmployeesPage() {
  const { company } = useParams();
  const navigate = useNavigate();
  const { loading, error, employees, searchEmployees } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    searchEmployees(company);
  }, [company, searchEmployees]);

  useEffect(() => {
    if (employees) {
      setFilteredEmployees(
        employees.filter(employee =>
          `${employee.name.first} ${employee.name.last}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [employees, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        ← Back
      </button>
      
      <h1 className="text-4xl font-bold mb-8 text-gray-800">{company} Employees</h1>
      
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

      {employees && employees.length > 0 && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search employees by name"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <EmployeeList employees={filteredEmployees} />
    </div>
  );
}

export default CompanyEmployeesPage;