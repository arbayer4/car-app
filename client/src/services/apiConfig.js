import axios from 'axios'

const getToken = () => {
    return new Promise(resolve => {
    resolve(`Bearer ${localStorage.getItem('token') || null}`)
})
}

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
    ? 'https://sei-products-api.herokuapp.com/api'
    : 'http://localhost:3000/api'
})



export default api