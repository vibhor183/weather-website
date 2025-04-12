import React from 'react';

function ForecastCard({ forecast }) {
  if (!forecast || !forecast.list) {
    return <p>No forecast data available.</p>;
  }

  return (
    <div>
      <h2>5-Day Forecast</h2>
      {forecast.list.slice(0, 5).map((forecastItem, index) => (
        <div key={index}>
          <p>Date: {new Date(forecastItem.dt_txt).toLocaleDateString()}</p>
          <p>Temperature: {forecastItem.main.temp}°C</p>
          <p>Condition: {forecastItem.weather[0].description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ForecastCard;
