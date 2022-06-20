import react from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { Search, MapPin } from 'react-feather';

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

  const now = new Date()

  const date = () => {
    const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]
    return (
      <div>
        <p className="Date">
          {dayName[now.getDay()]} {now.getDate()} <br />
          {monName[now.getMonth()]}
        </p>
      </div>
    )
  }

  const weatherBackground = () => {
 
    if(weather.icon == null && (now.getHours() >= 5 && now.getHours() < 18)) return "Day"
    if(weather.icon == null && (now.getHours() >= 18 && now.getHours() < 5)) return "Night"
    if(weather.icon === "01d") return "ClearSky"
    if(weather.icon === "01n") return "ClearSkyN"
    if(weather.icon === "02d") return "FewClouds"
    if(weather.icon === "02n") return "FewCloudsN"
    if(weather.icon === "03d") return "ScatteredClouds"
    if(weather.icon === "03n") return "ScatteredCloudsN"
    if(weather.icon === "04d") return "BrokenClouds"
    if(weather.icon === "04n") return "BrokenCloudsN"
    if(weather.icon === "09d" || weather.icon === "10d") return "Rain"
    if(weather.icon === "09n" || weather.icon === "10n") return "RainN"
    if(weather.icon === "11d") return "Thunderstorm"
    if(weather.icon === "11n") return "ThunderstormN"
    if(weather.icon === "13d") return "Snow"
    if(weather.icon === "13n") return "SnowN"
    if(weather.icon === "50d") return "Mist"
    if(weather.icon === "50n") return "MistN"
    
    return ""
  }

  return (
    <div className="App">

      <header className={weatherBackground()}>
        <h1>
          Find Weather Forecast
        </h1>

        <div>
          <input type="text"
            className="weatherInput"
            onChange={(e) => { setCityName(e.target.value) }}
            value={cityName}
          />

          <button onClick={searchCity}>
            <Search color="gray" size="20" />
          </button>
        </div>

      </header>

      <main className="Main">

        <div className='Container'>

          {weather.name ?
            <div>
              <div className="Location">
                <p>{weather.name}</p>
                <MapPin size="30" />
              </div>

              <p>{weather.description}</p>
            </div>
            : null}

          <div className="Info">

            {date()}

            {weather.name ?
              <>
                <p>{weather.temp}º</p>
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} />
              </>
              : null}

          </div>

          {weather.name ?

            <div className="MoreInfo">
              <div>
                <p>{weather.min}º</p>
                <p>MIN</p>
              </div>
              
              <div>
                <p>{weather.max}º</p>
                <p>MAX</p>
              </div>

              <div>
                <p>{weather.feels}º</p>
                <p>FEELS</p>
              </div>
            </div>

            : null}

        </div>

      </main>

    </div>
  );
}

export default App;
