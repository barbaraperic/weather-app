import React from 'react';
import './App.css';
import Card from './Components/Card'
import Title from './Components/Title'


const API_KEY = "da31d7805903b9703c90b599f12bcd0b"

function App() {
  const getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    console.log(city)
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json() 
    console.log('data', data)
  }
  

  return (
    <div>
      <Title />
      <Card getWeather={getWeather}/>
    </div>
  );
}

export default App;
