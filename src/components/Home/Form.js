import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState(null);
    const [country, setCountry] = useState([]);
    const [weather, setWeather] = useState();

    
    const handleOnChange = e => {
        setName(e.target.value);
    }

    const loadCountry = () => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }

    const handleSubmit = e => {
        e.preventDefault();
        loadCountry();          
    }
    console.log(country[0].capital[0])
    console.log(country[0].population)
    console.log(country[0].latlng)
    console.log(country[0].flags.svg)

    // weather
    const capital = country[0].capital[0];
    const API_KEY = '09276fa6e73a3c0e88013b6416c64880';
    const capitalWheather = () => {
        fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
        .then(res => res.json())
        .then(data => setWeather(data))
    }
    console.log(weather)
    console.log(weather.current.temperature)
    console.log(weather.current.weather_icons[0])
    console.log(weather.current.wind_speed)
    console.log(weather.current.precip)
    
    return (
        <>
        <div>
            <h1>This is form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleOnChange}
                placeholder='Enter Country'/>
                {name?<button type='submit' >Submit</button>: <button type='submit' disabled>Submit</button>}
            </form>
        </div>
        <div>
            <div>
                <p>capital: {country[0].capital[0]} </p>
            <p>Population: {country[0].population} </p>
            <p>Latlang: {country[0].latlng[0]}</p>
            <div><button onClick={capitalWheather}>Capital Weather</button></div>
            <img src={country[0].flags.svg} alt="" />
            </div>
            {/* weather */}
            <div>
                <p>Temperature: {weather.current.temperature} </p>
            <p>Wind Speed: {weather.current.wind_speed} </p>
            <p>Percip: {weather.current.precip}</p>
            <img src={weather.current.weather_icons[0]} alt="" />
            </div>
        </div>
        </>
    );
};

export default Form;