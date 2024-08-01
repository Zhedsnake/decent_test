import {OneCountryAction, OneCountryActionTypes, OneCountryState} from "../../../types/countriesData/oneCountry.ts";


const initialState: OneCountryState = {
    country:
        {
            name: {
                common: '',
                official: '',
            },
            capital: [''],
            flag: '',
        },
    loading: false,
    error: null,
};


export const oneCountryReducer = (state = initialState, action: OneCountryAction): OneCountryState => {
    switch (action.type) {
        case OneCountryActionTypes.GET_COUNTRY:
            return {
                loading: true,
                error: null,
                country:
                    {
                        name: {
                            common: '',
                            official: '',
                        },
                        capital: [''],
                        flag: '',
                    },
            };
        case OneCountryActionTypes.GET_COUNTRY_SUCCESS:
            return { loading: false, error: null, country: action.payload };
        case OneCountryActionTypes.GET_COUNTRY_ERROR:
            return {
                loading: false,
                error: action.payload,
                country:
                    {
                        name: {
                            common: '',
                            official: '',
                        },
                        capital: [''],
                        flag: '',
                    },
            };
        case OneCountryActionTypes.DEF_COUNTRY:
            return { ...state, ...initialState };
        default:
            return state;
    }
};


