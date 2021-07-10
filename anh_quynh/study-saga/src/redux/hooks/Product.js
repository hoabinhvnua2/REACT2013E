import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import productAction from '../actions/Product'
import {useMemo} from 'react';

export const useProduct = ()=> {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    
    const action = useMemo(
        () => bindActionCreators(productAction, dispatch), [dispatch]);

    return useMemo(() => ({
            products, action
        }), [products, action])
    
   
}
