import {CountriesData} from "./countriesData.ts";

export interface CountriesState {
    data: CountriesData;
    loading: boolean;
    error: string | null;
}
export enum CountriesActionTypes {
    GET_COUNTRIES = 'GET_COUNTRIES',
    GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS',
    GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR',
    DEF_COUNTRIES='DEF_COUNTRIES',
}
interface GetCountriesAction {
    type: CountriesActionTypes.GET_COUNTRIES;
}
interface GetCountriesSuccessAction {
    type: CountriesActionTypes.GET_COUNTRIES_SUCCESS;
    payload: never[];
}
interface GetCountriesErrorAction {
    type: CountriesActionTypes.GET_COUNTRIES_ERROR;
    payload: string;
}
interface CleanCountriesAction {
    type: CountriesActionTypes.DEF_COUNTRIES;
}
export type CountriesAction = GetCountriesAction | GetCountriesSuccessAction | GetCountriesErrorAction | CleanCountriesAction
