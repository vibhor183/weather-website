import React, { useState } from 'react';
import SearchBar from './components/SearchBar'; 
import WeatherCard from './components/WeatherCard'; 
import ForecastCard from './components/ForecastCard'; 
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState(''); 

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const weatherResponse = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeather(weatherResponse.data);
    } catch (err) {
      setError('Could not fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async () => {
    if (!city) {
      setError('Please enter a city first!');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const forecastResponse = await axios.get(`http://localhost:5000/weather/forecast?city=${city}`);
      console.log(forecastResponse.data);
      setForecast(forecastResponse.data);
    } catch (err) {
      console.error('Error fetching forecast:', err);
      setError('Could not fetch forecast data');
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Weather Dashboard</h1>

     
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        style={{ marginRight: 10 }}
      />

      <button onClick={() => fetchWeather(city)} disabled={loading || !city}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && <WeatherCard weather={weather} />}

      <button onClick={fetchForecast} disabled={loading || !city}>
        Show 5-Day Forecast
      </button>

      {forecast && <ForecastCard forecast={forecast} />}
    </div>
  );
}

export default App;
