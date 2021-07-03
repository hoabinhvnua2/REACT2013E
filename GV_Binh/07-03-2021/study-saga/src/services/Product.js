import axios from "axios";


const URL_API = 'https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/';

const getProduct = () => {
    return axios.get(`${URL_API}products`).then(res => {
        if (res.status === 200) {
            return res.data
        }
    });
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getProduct
}