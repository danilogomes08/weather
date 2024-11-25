import React from 'react';
import './WeatherMoreInfos.scss';

const WeatherMoreInfos = props => {
    return (
        <>
            {props.name ?

                <div className="MoreInfo">
                    <div>
                        <p>{props.min}º</p>
                        <p>MÍNIMA</p>
                    </div>

                    <div>
                        <p>{props.max}º</p>
                        <p>MÁXIMA</p>
                    </div>

                    <div>
                        <p>{props.feels}º</p>
                        <p>SENSAÇÃO</p>
                    </div>
                </div>

                : null}
        </>
    )
}

export default WeatherMoreInfos