import { createSelector } from 'reselect'


const getProduct = state => state.product

export const productSclector = createSelector(
    getProduct,
    product => product
)