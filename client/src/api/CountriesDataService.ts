import axios from 'axios';
import {API_URL} from './config';


export default class CountriesDataService {
    static async getCountries(name = "name") {
        const response = await axios.get(`${API_URL}/all`, {
            params: {
                fields: name,
            }
        });
        return response;
    }

    static async getCountryByName(countryId: string) {
        const response = await axios.get(`${API_URL}/name/${countryId}?fields=capital&fields=name&fields=flag`);
        return response;
    }
}
