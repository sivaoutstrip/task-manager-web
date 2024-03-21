import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const signUpApi = (data) => axios.post(`${apiUrl}/sign-up`, data);
export const signInApi = (data) => axios.post(`${apiUrl}/sign-in`, data);

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

export const listTaskApi = (params) => axios.get(`${apiUrl}/tasks`, params);
export const createTaskApi  = (data) => axios.post(`${apiUrl}/tasks`, data);