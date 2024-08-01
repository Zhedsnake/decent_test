import {Dispatch} from "react";
import {OneCountryAction, OneCountryActionTypes} from "../../../types/countriesData/oneCountry.ts";
import CountriesDataService from "../../../api/CountriesDataService.ts";

export const getOneCountryAction = (countryId: string) => {
    return async (dispatch: Dispatch<OneCountryAction>) => {
        try {
            dispatch({type: OneCountryActionTypes.GET_COUNTRY})
            const response = await CountriesDataService.getCountryByName(countryId);
            dispatch({type: OneCountryActionTypes.GET_COUNTRY_SUCCESS, payload: response.data})
        } catch (e) {
            if (e instanceof Error) {
                console.log(e.message);
            }
            dispatch({
                type: OneCountryActionTypes.GET_COUNTRY_ERROR,
                payload: 'Произошла ошибка при загрузке данных страны'
            })
        }
    }
}