import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://192.168.0.113:3000/member/',
});

// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default instance;