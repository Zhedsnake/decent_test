import {Dispatch} from "react";
import {CountriesActionTypes, CountriesAction} from "../../../types/countriesData/countries.ts";


export const defCountries = () => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        dispatch({type: CountriesActionTypes.DEF_COUNTRIES})
    }
}