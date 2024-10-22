'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Icono de hamburguesa

type NavbarProps = {
  onLocationChange: (location: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLocationChange }) => {
  const [locationInput, setLocationInput] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Estado para el menú móvil

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  };

  const handleSearch = () => {
    if (locationInput.trim()) {
      onLocationChange(locationInput);
      setLocationInput('');
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y título */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/weather-news_648198.png"
            alt="WhatsMyWeather Logo"
            className="h-8 w-8"
          />
          <div className="text-white font-bold text-xl font-roboto">WhatsMyWeather</div>
        </div>

        {/* Botón de hamburguesa para pantallas pequeñas */}
        <button
          className="block lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Input y botón de búsqueda (ocultable en móviles) */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex space-x-4 items-center w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <input
            type="text"
            value={locationInput}
            onChange={handleInputChange}
            placeholder="Ej: Jerusalem, Israel"
            className="p-2 rounded w-full lg:w-64 text-black"
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
