
import * as axios from 'axios';

// const apiDev = 'http://localhost:9000';
const apiProd = 'https://gamafica.herokuapp.com';
export const AVATAR_DEFAULT = 'https://res.cloudinary.com/cici/image/upload/v1629783657/util/147144_tvkou5.png';

export const BASE_API = apiProd;

export const api = axios.default.create({
  baseURL: `${BASE_API}/api`,
});

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';