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
        setWeather(resp.data)
      })
    setCityName('')
  }

  const date = () => {
    const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]
    const now = new Date()
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
 

    if(weather.weather[0].icon === "10d") return "Rain"


    return ""
  }

  return (
    <div className="App">

      <header>
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

          {weather.weather ?
            <>
              <div className="Location">
                <p>{weather.name}</p>
                <MapPin size="30" />
              </div>

              <p>{weather.weather[0].description}</p>
            </>
            : null}

          <div className="Info">

            {date()}

            {weather.weather ?
              <>
                <p>{weather.main.temp.toFixed()}º</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
              </>
              : null}

          </div>

          {weather.weather ?

            <div className="MoreInfo">
              <div>
                <p>{weather.main.temp_min.toFixed()}º</p>
                <p>MIN</p>
              </div>
              

              <div>
                <p>{weather.main.temp_max.toFixed()}º</p>
                <p>MAX</p>
              </div>

              <div>
                <p>{weather.main.feels_like.toFixed()}º</p>
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
