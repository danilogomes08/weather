import React from 'react';
import './WeatherMoreInfos.scss';

const WeatherMoreInfos = props => {
    return (
        <>
            {props.name ?

                <div className="MoreInfo">
                    <div>
                        <p>{props.min}º</p>
                        <p>MIN</p>
                    </div>

                    <div>
                        <p>{props.max}º</p>
                        <p>MAX</p>
                    </div>

                    <div>
                        <p>{props.feels}º</p>
                        <p>FEELS</p>
                    </div>
                </div>

                : null}
        </>
    )
}

export default WeatherMoreInfos