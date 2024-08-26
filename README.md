# WhatsMyWeather

WhatsMyWeather es una aplicación web que proporciona información meteorológica en tiempo real para diferentes países. Esto es gracias a que consume el API de https://www.weatherapi.com

## Requisitos previos

- Node.js (versión 14 o superior)
- npm (normalmente viene con Node.js)

## Instalación

1. Clona este repositorio

2. Navega al directorio del proyecto

3. Instala las dependencias

## Ejecución

Para iniciar la aplicación en modo de desarrollo:

La aplicación estará disponible en `http://localhost:3000`.

## Descripción de la API

WhatsMyWeather utiliza la API de WeatherAPI.com para obtener datos meteorológicos en tiempo real.

### Conexión a la API

La aplicación se conecta a la API mediante la función `fetchWeather` en `services/weatherService.ts`. Esta función realiza una solicitud GET a la API utilizando la biblioteca `fetch` de JavaScript.

### Visualización de datos en tiempo real

Los datos obtenidos de la API se muestran en la interfaz de usuario utilizando componentes React. La actualización de los datos se realiza de dos maneras:

1. Automáticamente cada 30 segundos.
2. Manualmente cuando el usuario hace clic en el botón "Actualizar".

Los datos se muestran en una tarjeta que incluye información como temperatura, condición climática, humedad y velocidad del viento.

## Tecnologías utilizadas

- React
- Next.js
- TypeScript
- Tailwind CSS