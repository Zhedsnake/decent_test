import {CountriesAction, CountriesActionTypes, CountriesState} from "../../../types/countriesData/countries.ts";


const initialState: CountriesState = {
    data: {
        countries: [
            {
                name: {
                    common: ''
                }
            }
        ]
    },
    loading: false,
    error: null,
};

export const countriesReducer = (state = initialState, action: CountriesAction): CountriesState => {
    switch (action.type) {
        case CountriesActionTypes.GET_COUNTRIES:
            return {
                loading: true,
                error: null,
                data: {
                    countries: [
                        {
                            name: {
                                common: ''
                            }
                        }
                    ]
                },
            };
        case CountriesActionTypes.GET_COUNTRIES_SUCCESS:
            return { loading: false, error: null, data: { countries: action.payload} };
        case CountriesActionTypes.GET_COUNTRIES_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: {
                    countries: [
                        {
                            name: {
                                common: ''
                            }
                        }
                    ]
                },
            };
        case CountriesActionTypes.DEF_COUNTRIES:
            return { ...state, ...initialState };
        default:
            return state;
    }
};


