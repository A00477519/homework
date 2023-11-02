import React, { useState, useEffect } from 'react';
import cold from './cold.png'
import mild from './mild.png'
import sunny from './sunny.png'

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const apiKey = 'a256f84b5a84a1431164d0ed7eab26ab';
    const city = 'Halifax';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        const temp = isCelsius ? data.main.temp : (data.main.temp * 9/5) + 32;
        setTemperature(temp);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [isCelsius]);

  useEffect(() => {
    let newWeatherIcon;
    if (temperature <= 10) {
      newWeatherIcon = cold
    } else if (temperature > 10 && temperature < 20) {
      newWeatherIcon = mild
    } else {
      newWeatherIcon = sunny
    }
    setWeatherIcon(newWeatherIcon);
  }, [temperature]);

  const toggleTemperatureUnit = () => {
    setIsCelsius(prev => !prev);
  }

  const [weatherIcon, setWeatherIcon] = useState(null);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <button onClick={toggleTemperatureUnit}>
          Change to {isCelsius ? '°F' : '°C'}
        </button>
      </div>
      <div>
        <img src={weatherIcon} alt="Weather Icon" />
        Temperature: {temperature} {isCelsius ? '°C' : '°F'}
      </div>
    </div>
  );

};

export default WeatherSection;
