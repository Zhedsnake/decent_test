import {combineReducers} from "@reduxjs/toolkit";
import {countriesReducer} from "./сountriesReducers/countriesReducer.ts";


export const rootReducer = combineReducers({
    countries: countriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>
