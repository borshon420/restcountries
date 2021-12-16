import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [country, setCountry] = useState([]);
    const [weather, setWeather] = useState([]);

    
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
    const capitalWheather = () => {
        // http://api.weatherstack.com/current?access_key=631e2470231ba0e2c1d7c84a0f848333&query=dhaka
        fetch(`http://api.weatherstack.com/current?access_key=631e2470231ba0e2c1d7c84a0f848333&query=dhaka`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    // console.log(weather)
    
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
            {name?<div>
                <p>capital: {country[0].capital[0]} </p>
            <p>Population: {country[0].population} </p>
            <p>Latlang: {country[0].latlng[0]}</p>
            <div><button onClick={capitalWheather}>Capital Weather</button></div>
            <img src={country[0].flags.svg} alt="" />
            </div>: <div></div>}
        </div>
        </>
    );
};

export default Form;