import React, { useState } from 'react';
import './App.css';
import Title from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'


const API_KEY = "da31d7805903b9703c90b599f12bcd0b"

function App() {

  const[temp, setTemp] = useState(undefined)
  const[city, setCity] = useState(undefined)
  const[country, setCountry] = useState(undefined)
  const[humidity, setHumidity ] = useState(undefined)
  const[description, setDescription] = useState(undefined)
  const[error, setError] = useState(undefined)

  const getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json()
    if (city && country) {
      setTemp(data.main.temp)
      setCity(data.name)
      setCountry(data.sys.country)
      setHumidity(data.main.humidity)
      setDescription(data.weather[0].description)
      setError('')
    } else {
      setTemp(undefined)
      setCity(undefined)
      setCountry(undefined)
      setHumidity(undefined)
      setDescription(undefined)
      setError('Please enter the values')
    }
    
  }
  
  return (
    <div>
      <Title />
      <Form getWeather={getWeather}/>
      <Weather
        temp={temp}
        city={city}
        country={country}
        humidity={humidity}
        description={description}
        error={error}
      />
    </div>
  );
}

export default App;
