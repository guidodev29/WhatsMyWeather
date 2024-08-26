'use client'
import React, { useState } from 'react';
import { getNames } from 'country-list';
import Select from 'react-select';

type NavbarProps = {
  onCountryChange: (country: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onCountryChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countries = getNames().map((country) => ({
    value: country,
    label: country,
  }));

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption?.value || null);
    onCountryChange(selectedOption?.value || null);
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
        <Select
          options={countries}
          onChange={handleCountryChange}
          placeholder="Selecciona un País ↓ "
          className="w-64 text-black"
        />
      </div>
      {selectedCountry && (
        <h1 className="text-white text-center mt-4">
          País Seleccionado: {selectedCountry}
        </h1>
      )}
    </nav>
  );
};

export default Navbar;

