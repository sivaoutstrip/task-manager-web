import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

export const signUpApi = (params) => axios.post(`${apiUrl}/sign-up`, params);