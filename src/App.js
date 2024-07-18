import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmployeeProvider } from './contexts/EmployeeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EmployeeDetailsPage from './pages/EmployeeDetailsPage';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="App bg-gray-100 min-h-screen">
          <Header />
          <div className="container mx-auto mt-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/employee/" element={<EmployeeDetailsPage />} />
              <Route path="/favs" element={<FavoritesPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;





