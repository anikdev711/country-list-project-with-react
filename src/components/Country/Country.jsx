import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country);
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }

    console.log(handleVisitedCountries);
    console.log(handleVisitedFlags);

    return (
        <div className={`country ${visited?'visited' : 'not-visited'}`}>
            <h3 style={{color: visited ? 'visited' : 'green'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button> <br /><br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? 'visited':'going'}</button>
            {visited ?  'I have visited this country': 'I want to visit'}
            <hr />
            <CountryDetail 
            country = {country} 
            handleVisitedCountries={handleVisitedCountries} 
            handleVisitedFlags={handleVisitedFlags}></CountryDetail>
        </div>
    );
};

export default Country;