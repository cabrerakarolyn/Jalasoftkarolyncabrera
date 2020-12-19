import axios from 'axios';

const BASE_URL="";

const API = axios.create({
	BASE_URL: BASE_URL,
});

export default API;
