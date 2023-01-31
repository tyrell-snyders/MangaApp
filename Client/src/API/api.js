import axios from 'axios'

export default axios.create({
    baseURL: 'http://172.22.224.1:3000/',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
})