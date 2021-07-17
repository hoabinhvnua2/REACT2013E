// dungf axios viet common
import axios  from "axios"

const API_REAL = 'https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1'
const getUser = () => {
    return axios.get(`${API_REAL}/users`).then(result => {
        if (result.status === 200) {
            return result.data
        }
    }).catch()
}

const addUser = (params) => {
    return axios.post(`${API_REAL}/users`, params).then(result => {
       
    })
}

export const userApi = {
    getUser,
    addUser
}