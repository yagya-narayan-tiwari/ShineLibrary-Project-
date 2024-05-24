import axios from "axios";
// import { BASE_URL } from "../constants/ConnectionConst";
const BASE_URL='http://127.0.0.1:8000';
import { getToken } from "./UserServies";

export function fetchBooking(userid){
    return axios.get(`${BASE_URL}/seat/booked-info/${userid}`,{headers:{'Authorization':`Bearer ${getToken()}`}});
}
export function fetchAllSeats(){
    return axios.get(`${BASE_URL}/seat/get/`);
}
export function bookingSeat(seatno){
    return axios.get(`${BASE_URL}/seat/booking/${seatno}`,{headers:{'Authorization':`Bearer ${getToken()}`}})
}
export function cancelBooking(seatno){
    return axios.delete(`${BASE_URL}/seat/booking/${seatno}`,{headers:{'Authorization':`Bearer ${getToken()}`}})
}