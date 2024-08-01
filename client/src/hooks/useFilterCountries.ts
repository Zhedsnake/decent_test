import {useMemo} from "react";
import {CommonNameCountries} from "../types/countriesData/countriesData.ts";


export const useFilterCountries = (countries: CommonNameCountries[], filter: string): CommonNameCountries[] => {

    const sortedSearchedCountries = useMemo(() => {
        return countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
    }, [countries, filter])

    return sortedSearchedCountries;
}
