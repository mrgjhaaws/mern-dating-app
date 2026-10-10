// Infographic 13/15 - API service file (Axios)
import axios from 'axios';

// In development this is http://localhost:5000/api
// In production set VITE_API_URL (e.g. https://your-api.onrender.com/api)
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getProfiles = () => API.get('/profiles');
export const addProfile = (data) => API.post('/profiles', data);
export const updateProfile = (id, data) => API.put(`/profiles/${id}`, data);
export const deleteProfile = (id) => API.delete(`/profiles/${id}`);

export default API;
