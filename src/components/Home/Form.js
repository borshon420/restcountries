import React, { useState } from 'react';

const Form = () => {
    const [country, setCountry] = useState("");

    const handleOnChange = e => {
        setCountry(e.target.value);
        console.log(country)
    }

    const handleSubmit = e => {
        e.prevent.default();
    }
    return (
        <div>
            <h1>This is form</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                onChange={handleOnChange}
                placeholder='Enter Country'/>
                {country?<button type='submit'>Submit</button>: <button type='submit' disabled>Submit</button>}
            </form>
        </div>
    );
};

export default Form;