import axios from 'axios';
import {API_URL} from './config';


export default class CountriesDataService {
    static async getCountriesByPagination(name = "name") {
        const response = await axios.get(`${API_URL}/all`, {
            params: {
                fields: name,
            }
        });
        console.log(response.data);
        return response.data;
    }

    // static async getStaffById(stuffId: string) {
    //     const response = await axios.get(`${API_URL}/api/users/${stuffId}`);
    //     return response.data;
    // }
}
