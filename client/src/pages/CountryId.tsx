import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {OneCountryData} from "../types/countriesData/oneCountryData.ts";
import BackButton from "../components/UI/backButton/BackButton.tsx";


const CountryId: React.FC = () => {
    const {countryId} = useParams<{ countryId: string }>();
    const [country, setCountry] = useState<OneCountryData>();

    const {
        country: countryData,
        error: countryError,
        loading: isCountryLoading
    } = useTypedSelector(state => state.oneCountry)
    const {getOneCountryAction, defOneCountry} = useActions()


    useEffect((): void => {
        if (Array.isArray(countryData)) {
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

    return (
        <main className="container" style={{marginTop: "50px", marginBottom: "30px"}}>
            {countryError &&
                <header className="row text-bg-danger py-2 py-md-3">
                    <div className="col-9">
                        <h1 style={{textAlign: "center"}}>{countryError}</h1>
                    </div>
                    <div className="col-3">
                        <BackButton/>
                    </div>
                </header>
            }
            {isCountryLoading ? (
                <Loader/>
            ) : (
                country && (
                    <>
                        <header className="row text-bg-primary py-2 py-md-3">
                            <div className="col-9">
                                <h1 style={{textAlign: "center"}}>Страна: {country.name.common}</h1>
                            </div>
                            <div className="col-3">
                                <BackButton/>
                            </div>
                        </header>
                        <section>
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <p style={{marginBottom: 0}}><strong>Official
                                                    Name:</strong> {country.name.official}</p>
                                            </li>
                                            <li className="list-group-item">
                                                <p style={{marginBottom: 0}}><strong>Capital:</strong> King Edward Point
                                                </p> {country.capital.join(', ')}
                                            </li>
                                            <li className="list-group-item">
                                                <p style={{marginBottom: 0}}><strong>Flag:</strong> {country.flag}
                                                </p>Morbi leo risus
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            )}
        </main>
    );
};

export default CountryId;
