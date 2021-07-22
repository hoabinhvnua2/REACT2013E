
import axios from "axios";

const URL = 'https://5fd96f0e7e05f000170d385e.mockapi.io/api/v1/';

const getProduct = () => (
    axios.get(`${URL}products`).then(x => x.data)
)

const addProduct = (params) => (
    axios.post(`${URL}products`, params).then(x => {
        console.log(x)
    })
)

const editProduct = (params) => (
    axios.put(`${URL}products/${params.id}`, params)
)

const deleteProduct = (id) => (
    axios.delete(`${URL}products/${id}`)
)

const getDetailProduct = (id) => (
    axios.get(`${URL}products/${id}`).then(x => x.data)
)

export const productApi = {
    getProduct,
    addProduct,
    editProduct,
    deleteProduct,
    getDetailProduct
}