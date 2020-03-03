import React from 'react'

const Weather = props => {
    const temperature = Number(props.temp - 273).toFixed(1) 
    return (
        <div> 
            {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
            {props.temp && <p>Temperature: {temperature} celsius</p>}
            {props.humidity && <p>Humidity: {props.humidity} %</p>}
            {props.description && <p>Conditions: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}
    
export default Weather


