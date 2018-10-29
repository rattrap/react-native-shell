import axios from 'axios';
import { BASE_URL } from './constants';

export default client = axios.create({
    baseURL: BASE_URL,
    responseType: 'json'
});