import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:31387/api'
});

export default clienteAxios;