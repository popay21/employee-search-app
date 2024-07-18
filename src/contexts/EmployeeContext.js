import React, { createContext, useState, useEffect } from 'react';
import { getEmployees } from '../services/api';
import { getFavorites, setFavorites } from '../utils/localStorage';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [favorites, setFavoritesState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFavoritesState(getFavorites());
  }, []);

  const addFavorite = (employee) => {
    const newFavorites = [...favorites, employee];
    setFavoritesState(newFavorites);
    setFavorites(newFavorites);
  };

  const removeFavorite = (employee) => {
    const newFavorites = favorites.filter(fav => fav.login.uuid !== employee.login.uuid);
    setFavoritesState(newFavorites);
    setFavorites(newFavorites);
  };

  const isFavorite = (employee) => {
    return favorites.some(fav => fav.login.uuid === employee.login.uuid);
  };

  const toggleFavorite = (employee) => {
    if (isFavorite(employee)) {
      removeFavorite(employee);
    } else {
      addFavorite(employee);
    }
  };

  const searchEmployees = async (company) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getEmployees(company);
      setEmployees(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmployeeContext.Provider value={{ 
      employees, 
      favorites, 
      loading, 
      error, 
      addFavorite, 
      removeFavorite, 
      isFavorite,
      toggleFavorite,
      searchEmployees 
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};