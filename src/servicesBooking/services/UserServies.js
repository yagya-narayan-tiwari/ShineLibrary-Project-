import axios from "axios";
// import { BASE_URL } from "../constants/ConnectionConst";
const BASE_URL='http://127.0.0.1:8000';
const STORAGE_KEY = 'user-token';
const USER_KEY_ID = 'user-key'
export function userLogin(loginCredentials){
    return axios.post(`${BASE_URL}/user/login`,loginCredentials);
}
export function addUser(Credentials){
    return axios.post(`${BASE_URL}/user`,Credentials);
}
export function storeToken(token){
    localStorage.setItem(STORAGE_KEY,token);
}
export function storeID(userid){
    localStorage.setItem(USER_KEY_ID,userid);
}
export function FetchUserData(userid){
    return axios.get(`${BASE_URL}/user/${userid}`,{headers:{'Authorization':`Bearer ${getToken()}`}})
}
export function removeToken(){
    localStorage.removeItem(STORAGE_KEY);
}
export function removeId(){
    localStorage.removeItem(USER_KEY_ID);
}
export function getToken(){
    return localStorage.getItem(STORAGE_KEY);
}
export function getIdOfUser(){
    return localStorage.getItem(USER_KEY_ID);
}

export function updatedUserData(userid,userData){
    return axios.patch(`${BASE_URL}/user/${userid}`,userData,{headers:{'Authorization':`Bearer ${getToken()}`}})
}