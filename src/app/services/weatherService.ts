export const fetchWeather = async (query: string) => {
  const apiKey = '3f0ccd15d5bb4c03b50235306242508';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (!data || !data.location) {
      throw new Error('No se encontraron datos para esta ubicación.');
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al obtener datos del clima: ${error.message}`);
    }
    throw new Error('Error desconocido al obtener datos del clima');
  }
};
