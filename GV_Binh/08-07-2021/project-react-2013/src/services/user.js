// dungf axios viet common
import { Filter1 } from "@material-ui/icons"
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
    // const params=  {
    //     userName: '',
    //     photo: [new File(), new File()],
    //     top: 17,
    //     left: 24,
    //     right: 417,
    //     bottom: 424
    // }
    // const formData = new FormData();

    // Object.keys(params).map(key => {
    //     if (key !== 'photo') {
    //         formData.append(key, params[key])
    //     } else {
            
    //         for (const item in params[key]) {
    //             formData.append(key, item)
    //         }
    //     }
    // })

    return axios.post(`${API_REAL}/users`, params).then(result => {
       
    })
}

export const userApi = {
    getUser,
    addUser
}