import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

import WeatherInfos from './components/WeatherInfos'
import WeatherHeader from './components/WheatherHead'

function App() {

  const [cityName, setCityName] = useState('')
  const [weather, setWeather] = useState({})

  const searchCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d5c57be0858cd6cd02494d79769700b8&units=metric&lang=pt_br`
    Axios.get(url)
      .then((resp) => {
        setWeather({
          name: resp.data.name,
          description: resp.data.weather[0].description,
          icon: resp.data.weather[0].icon,
          temp: resp.data.main.temp.toFixed(),
          min: resp.data.main.temp_min.toFixed(),
          max: resp.data.main.temp_max.toFixed(),
          feels: resp.data.main.feels_like.toFixed()
        })
      })
    setCityName('')
  }

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      searchCity()
    }
  }

  const weatherBackground = () => {
    const now = new Date()
    if (weather.icon == null && (now.getHours() >= 5 && now.getHours() < 18)) return "Day"
    if (weather.icon == null && (now.getHours() >= 18 && now.getHours() < 5)) return "Night"
    if (weather.icon === "01d") return "ClearSky"
    if (weather.icon === "01n") return "ClearSkyN"
    if (weather.icon === "02d") return "FewClouds"
    if (weather.icon === "02n") return "FewCloudsN"
    if (weather.icon === "03d") return "ScatteredClouds"
    if (weather.icon === "03n") return "ScatteredCloudsN"
    if (weather.icon === "04d") return "BrokenClouds"
    if (weather.icon === "04n") return "BrokenCloudsN"
    if (weather.icon === "09d" || weather.icon === "10d") return "Rain"
    if (weather.icon === "09n" || weather.icon === "10n") return "RainN"
    if (weather.icon === "11d") return "Thunderstorm"
    if (weather.icon === "11n") return "ThunderstormN"
    if (weather.icon === "13d") return "Snow"
    if (weather.icon === "13n") return "SnowN"
    if (weather.icon === "50d") return "Mist"
    if (weather.icon === "50n") return "MistN"

    return ""
  }

  return (
    <div className="App">

      <WeatherHeader
        weatherBackground={weatherBackground()}
        keyHandler={keyHandler}
        handleChange={(e) => { setCityName(e.target.value) }}
        value={weather.name}
        searchCity={searchCity}
      />

      <WeatherInfos
        name={weather.name}
        description={weather.description}
        icon={weather.icon}
        min={weather.min}
        max={weather.max}
        feels={weather.feels}
        temp={weather.temp}
      />

    </div>
  );
}

export default App;
