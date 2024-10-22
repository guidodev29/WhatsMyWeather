'use client';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

type NavbarProps = {
  onLocationChange: (location: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onLocationChange }) => {
  const [locationInput, setLocationInput] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* Logo y título */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/weather-news_648198.png"
            alt="WhatsMyWeather Logo"
            className="h-8 w-8"
          />
          <span className="text-white font-bold text-xl font-roboto">WhatsMyWeather</span>
        </div>

        {/* Botón de hamburguesa (visible solo en pantallas pequeñas) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Input y botón (ocultable en móviles) */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:w-auto lg:items-center gap-4`}
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full lg:w-auto"
          >
            Buscar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
