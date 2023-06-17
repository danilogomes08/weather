import React from 'react';
import WeatherForms from '../Forms/WeatherForms';
import './WheatherHead.scss'

const WheatherHeader = props => {
    return (
        <header className={props.weatherBackground}>
        <h1>
          Find Weather Forecast
        </h1>

        <WeatherForms 
          keyHandler={props.keyHandler}
          handleChange={props.handleChange}
          value={props.value}
          searchCity={props.searchCity}
        />

      </header>
    )
}

export default WheatherHeader