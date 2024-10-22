'use client';
import '@fontsource/roboto';
import React, { useState, useEffect } from 'react';
import Navbar from '../app/components/NavBar';
import Footer from '../app/components/Footer';
import { fetchWeather } from '../app/services/weatherService';
import { FaSyncAlt } from 'react-icons/fa';

export default function Home() {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [location, setLocation] = useState<string>(''); // Cambiado a location
  const [loading, setLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [error, setError] = useState<string | null>(null);

  // Define la función para manejar el cambio de ubicación
  const handleLocationChange = (newLocation: string) => {
    if (newLocation) {
      setLocation(newLocation);
    }
  };

  const updateWeatherData = async () => {
    if (location) {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchWeather(location);
        setWeatherData(data);
        setTimeLeft(30);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocurrió un error desconocido');
        }
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    updateWeatherData();
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateWeatherData();
    }, 30000);

    return () => clearInterval(interval);
  }, [location]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Usa la función handleLocationChange en el Navbar */}
      <Navbar onLocationChange={handleLocationChange} />
      <div className="container mx-auto p-4 flex flex-col items-center mt-6">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 w-full max-w-md" role="alert">
            <strong className="font-bold">Error:</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        {weatherData && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
            </h2>
            <div className="text-gray-600">
              <p>Latitud: {weatherData.location.lat}</p>
              <p>Longitud: {weatherData.location.lon}</p>
              <p>Zona horaria: {weatherData.location.tz_id}</p>
              <p>Hora local: {weatherData.location.localtime}</p>
              <p>Temperatura: {weatherData.current.temp_c}°C / {weatherData.current.temp_f}°F</p>
              <div className="flex items-center mt-4">
                <img className="w-12 h-12 rounded-full mr-4" src={weatherData.current.condition.icon} alt="Weather condition icon" />
                <div className="text-sm">
                  <p className="text-gray-700 leading-none">Condición: {weatherData.current.condition.text}</p>
                </div>
              </div>
              <p className="mt-4">Día/Noche: {weatherData.current.is_day ? 'Día' : 'Noche'}</p>
              <p>Humedad: {weatherData.current.humidity}%</p>
              <p>Viento: {weatherData.current.wind_kph} kph {weatherData.current.wind_dir}</p>
              <p className="mt-2 text-gray-500 text-xs">Última actualización: {weatherData.current.last_updated}</p>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={updateWeatherData}
                className={`px-6 py-2 rounded-lg text-white flex items-center justify-center ${
                  loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSyncAlt className="animate-spin mr-2" /> Actualizando...
                  </>
                ) : (
                  'Actualizar'
                )}
              </button>
              <span className="text-gray-500 text-sm">
                {`Actualización automática en: ${timeLeft} seg`}
              </span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
