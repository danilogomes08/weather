import React from 'react';
import { Search } from 'react-feather';
import './WeatherForms.scss'

const WeatherForms = props => {
  
    return (
        <div>
        <input type="text"
          className="weatherInput"
          onKeyUp={props.keyHandler}
          onChange={props.handleChange}
          value={props.value}
        />

        <button onClick={props.searchCity}>
          <Search color="gray" size="20" />
        </button>
      </div>
    )
}

export default WeatherForms
