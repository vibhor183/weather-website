import React from 'react';

function WeatherCard({ weather }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: 20,
      maxWidth: 300,
      borderRadius: 10
    }}>
      <h3>{weather.condition}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.condition}
      />
      <p>Temperature: {weather.temperature}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
}

export default WeatherCard;
