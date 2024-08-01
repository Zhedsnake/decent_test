import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {OneCountryData} from "../types/countriesData/oneCountryData.ts";


const CountryId: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [country, setCountry] = useState<OneCountryData>();
  console.log(country);


  const {country: countryData, error: countryError, loading: isCountryLoading} = useTypedSelector(state => state.oneCountry)
  const {getOneCountryAction, defOneCountry} = useActions()


  useEffect((): void => {
    if (Array.isArray(countryData)) {
      console.log(countryData[0]);
      setCountry(countryData[0]);
    }
  }, [countryData]);

  useEffect(() => {
    if (countryId) {
      getOneCountryAction(countryId);
    }
  }, []);

  useEffect(() => {
    return () => {
        defOneCountry()
    };
  }, []);

  return (<div className="user-detail">
        {countryError && <h1>{countryError}</h1> }
        {isCountryLoading ? (
            <Loader />
        ) : (
            country && (
                <main className="user-detail__main">
                  <h1>{country.name.common}</h1>
                  <p><strong>Official Name:</strong> {country.name.official}</p>
                  <p><strong>Capital:</strong> {country.capital.join(', ')}</p>
                  <p><strong>Flag:</strong> {country.flag}</p>
                </main>
            )
        )}
      </div>
  );
};

export default CountryId;
