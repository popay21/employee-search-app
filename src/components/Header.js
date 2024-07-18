import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Employee Finder</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-blue-200">Home</Link></li>
          <li><Link to="/favs" className="text-white hover:text-blue-200">Favorites</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;