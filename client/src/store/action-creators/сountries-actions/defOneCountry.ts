import {Dispatch} from "react";
import {OneCountryAction, OneCountryActionTypes} from "../../../types/countriesData/oneCountry.ts";


export const defOneCountry = () => {
    return async (dispatch: Dispatch<OneCountryAction>) => {
        dispatch({type: OneCountryActionTypes.DEF_COUNTRY})
    }
}