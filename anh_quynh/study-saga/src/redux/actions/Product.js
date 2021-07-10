export const actionsProduct = Object.freeze({
    GET_PRODUCT: "GET_PRODUCT",
    GET_PRODUCT_SUCCESS: "GET_PRODUCT_SUCCESS",
    GET_PRODUCT_FAIL: "GET_PRODUCT_FAIL",
    EDIT_PRODUCT: 'EDIT_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    DELETE_PRODUCT : 'DELETE_PRODUCT'
})

const getProduct = ()=>({
    type: actionsProduct.GET_PRODUCT
});

const addProduct = (params) => ({
    type: actionsProduct.ADD_PRODUCT,
    payload: params
})

const editProduct = (params) => ({
    type: actionsProduct.EDIT_PRODUCT,
    payload: params
});


const deleteProduct = (params) => ({
    type: actionsProduct.DELETE_PRODUCT,
    payload: params
})

export default {
    getProduct,
    editProduct,
    addProduct,
    deleteProduct
}