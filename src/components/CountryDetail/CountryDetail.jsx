import CountryData from "../CountryData/CountryData";


const CountryDetail = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    return (
        <div>
            <CountryData 
            country={country} 
            handleVisitedCountries={handleVisitedCountries} 
            handleVisitedFlags={handleVisitedFlags}></CountryData>
        </div>
    );
};

export default CountryDetail;