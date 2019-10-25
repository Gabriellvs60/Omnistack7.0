import axios from 'axios';

const api = axios.create({
    //talvez o ip da maquina
    //jamais localhost
    baseURL: 'http://10.0.2.2:3333'
})

export default api;