import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://192.168.15.14:3333',
	baseURL: 'https://api-instarocket.herokuapp.com',	
});

export default api;