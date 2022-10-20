import axios from 'axios';

// Trae esos chistes
export default axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random',
  responseType: 'json',
  timeout: 6000
});