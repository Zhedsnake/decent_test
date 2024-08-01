import React from 'react';
import {Link} from "react-router-dom";
import {CommonNameCountries} from "../../types/countriesData/countriesData.ts";

interface listCountriesProps {
    sortedSearchedCountries: CommonNameCountries[],
    startIndex: number,
    limit: number,
}
const ListCountries: React.FC<listCountriesProps>= ({sortedSearchedCountries, startIndex, limit}) => {
    return (
        <>
            {sortedSearchedCountries && sortedSearchedCountries.slice(startIndex, startIndex + limit).map((country, index) => (
                <Link key={index} to={`/country/${country.name.common}`} style={{listStyleType: "none",}} className="list-group-item list-group-item-action">
                    <li>{country.name.common}</li>
                </Link>
            ))}
        </>
    );
};

export default ListCountries;