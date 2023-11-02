import React, { useState, useEffect } from 'react';
import cold from './cold.png'
import mild from './mild.png'
import sunny from './sunny.png'

const WeatherSection = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isDegree, setIsDegree] = useState(true);
  let [temperature, setTemperature] = useState(null);

  useEffect(() => {
  
    const apiKey = 'ccd4a7de04a58dd377790678f4d65339';
    const town = 'Halifax';
    // const lat = '44.651070';
    // const long = '-63.582687';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={44.651070}&lon={-63.582687}&appid={ccd4a7de04a58dd377790678f4d65339}`;


    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        const temp = isDegree ? data.main.temp : (data.main.temp * 9/5) + 32;
        setTemperature(temp);
      })
      .catch((error) => console.error('Error fetching data:', error));
    }, [isDegree]);

    

    useEffect(() => {
        let newWeatherIcon;
        if(isDegree == 0){
            temperature = (temperature-32)* (5/9);
        }
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
        setIsDegree(prev => !prev);
    }

    // const temperature = isDegree ? weatherData.main.temp : (weatherData.main.temp * 9/5) + 32;
    // let weatherIcon;

    // if (temperature <= 10) {
    //     weatherIcon = cold
    // } else if (temperature > 10 && temperature < 20) {
    //     weatherIcon = mild
    // } else {
    //     weatherIcon = sunny
    // }
    const [weatherIcon, setWeatherIcon] = useState(null);

    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div style={{display: 'flex'}}>
                <h4>{temperature} {isDegree ? '°C' : '°F'}</h4> 
                <img src={weatherIcon} alt="Weather Icon" width='70px' />
            </div>
            <div>
                <button onClick={toggleTemperatureUnit}>
                Click to change to {isDegree ? '°F' : '°C'}
                </button>
            </div>   
        </div>
  );

};

export default WeatherSection;
