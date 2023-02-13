import axios from 'axios'

export default axios.create({
    baseURL: 'http://192.168.18.94:3000//',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
})