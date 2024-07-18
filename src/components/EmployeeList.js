import React, { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import EmployeeCard from './EmployeeCard';

function EmployeeList() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {employees.map((employee, index) => (
        <EmployeeCard key={employee.login.uuid} employee={employee} index={index} />
      ))}
    </div>
  );
}

export default EmployeeList;