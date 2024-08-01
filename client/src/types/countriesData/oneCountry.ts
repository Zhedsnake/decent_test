import {OneCountryData} from "./oneCountryData.ts";

export interface OneCountryState {
    country: OneCountryData;
    loading: boolean;
    error: string | null;
}
export enum OneCountryActionTypes {
    GET_COUNTRY = 'GET_COUNTRY',
    GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS',
    GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR',
    DEF_COUNTRY='DEF_COUNTRY',
}
interface GetOneCountryAction {
    type: OneCountryActionTypes.GET_COUNTRY;
}
interface GetOneCountrySuccessAction {
    type: OneCountryActionTypes.GET_COUNTRY_SUCCESS;
    payload: any;
}
interface GetOneCountryErrorAction {
    type: OneCountryActionTypes.GET_COUNTRY_ERROR;
    payload: string;
}
interface CleanOneCountryAction {
    type: OneCountryActionTypes.DEF_COUNTRY
}
export type OneCountryAction = GetOneCountryAction | GetOneCountrySuccessAction | GetOneCountryErrorAction | CleanOneCountryAction
