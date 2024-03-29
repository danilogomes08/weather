import React from 'react';
import './WeatherInfos.scss';
import WeatherDate from '../Date/WeatherDate'
import { MapPin } from 'react-feather';
import WeatherMoreInfos from './MoreInfos/WeatherMoreInfos'

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
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon open weather"/>
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