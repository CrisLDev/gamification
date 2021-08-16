
import * as axios from 'axios';

const apiDev = 'http://localhost:9000';
// const apiProd = '';

export const BASE_API = apiDev;

export const api = axios.default.create({
  baseURL: `${BASE_API}/api`,
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';