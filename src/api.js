const axios = require('axios');
const baseURL = 'http://192.168.0.113:3000/member';

const instance = axios.create({ baseURL });

const makePostCall = (url, data) => instance.post(url, data);

export const authorize = (user, password) => makePostCall('/auth/login', { nickName: user, password });