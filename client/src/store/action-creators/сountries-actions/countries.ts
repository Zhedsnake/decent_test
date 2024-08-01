import {Dispatch} from "react";
import {CountriesActionTypes, CountriesAction} from "../../../types/countriesData/countries.ts";
import CountriesDataService from "../../../api/CountriesDataService.ts";

export const getCountriesAction = () => {
    return async (dispatch: Dispatch<CountriesAction>) => {
        try {
            dispatch({type: CountriesActionTypes.GET_COUNTRIES})
            const response = await CountriesDataService.getCountries();
            dispatch({type: CountriesActionTypes.GET_COUNTRIES_SUCCESS, payload: response.data})
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
            dispatch({
                type: CountriesActionTypes.GET_COUNTRIES_ERROR,
                payload: 'Произошла ошибка при загрузке стран'
            })
        }
    }
}