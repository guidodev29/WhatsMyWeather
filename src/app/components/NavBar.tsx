'use client'
import React, { useState } from 'react';

type NavbarProps = {
  onLocationChange: (location: string) => void; // Cambiado a onLocationChange
};

const Navbar: React.FC<NavbarProps> = ({ onLocationChange }) => {
  const [locationInput, setLocationInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  };

  const handleSearch = () => {
    if (locationInput.trim()) {
      onLocationChange(locationInput); // Usa onLocationChange para enviar la ubicación
      setLocationInput('');
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/weather-news_648198.png" 
            alt="WhatsMyWeather Logo" 
            className="h-8 w-8" 
          />
          <div className="text-white font-bold text-xl font-roboto">WhatsMyWeather</div>
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            value={locationInput}
            onChange={handleInputChange}
            placeholder="Ej: Jerusalem, Israel"
            className="p-2 rounded w-64 text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
