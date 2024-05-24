import axios from "axios";
const BASE_URL='http://127.0.0.1:8000';

export function addFeadback(info){
    return axios.post(`${BASE_URL}/feedback`,info);
}