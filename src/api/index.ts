import axios from 'axios';
import { API_BASE_URL } from 'config';

// fetch all locations by search query
export const getLocationsByQuery = async(query: string) => {
    try {
        const test  = await axios.get(`${API_BASE_URL}/en/server/search/query3?query=${query}`);
        return test;
    } catch(err) {
        console.log(err);
    }
}