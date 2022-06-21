import React from 'react';
import './WeatherInfos.css';
import WeatherDate from './WeatherDate'
import { MapPin } from 'react-feather';
import WeatherMoreInfos from './WeatherMoreInfos'

const WeatherInfos = props => {
    return (
        <main className="Main">

        <div className='Container'>

          {props.name ?
            <div>
              <div className="Location">
                <p>{props.name}</p>
                <MapPin size="30" />
              </div>

              <p>{props.description}</p>
            </div>
            : null}

          <div className="Info">

            <WeatherDate />

            {props.name ?
              <>
                <p>{props.temp}º</p>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
              </>
              : null}

          </div>

          <WeatherMoreInfos 
            name={props.name}
            min={props.min}
            max={props.max}
            feels={props.feels}
          />

        </div>

      </main>
    )
}

export default WeatherInfos;