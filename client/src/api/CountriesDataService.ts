import axios from 'axios';
import {API_URL} from './config';


export default class CountriesDataService {
    static async getCountriesByPagination(name = "name") {
        const response = await axios.get(`${API_URL}/all`, {
            params: {
                fields: name,
            }
        });
        return response;
    }

    // static async getStaffById(stuffId: string) {
    //     const response = await axios.get(`${API_URL}/api/users/${stuffId}`);
    //     return response.data;
    // }
}
