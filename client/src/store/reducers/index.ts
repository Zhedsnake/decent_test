import {combineReducers} from "@reduxjs/toolkit";
import {countriesReducer} from "./сountriesReducers/countriesReducer.ts";
import {oneCountryReducer} from "./сountriesReducers/oneCountryReducer.ts";


export const rootReducer = combineReducers({
    countries: countriesReducer,
    oneCountry: oneCountryReducer
})

export type RootState = ReturnType<typeof rootReducer>
