import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
    useParams, useLocation
  } from "react-router-dom";
import {productApi} from '../../../services/Product'


const ProductDetail = () => {
    const location = useLocation();
    const [info, setInfo] = useState();
    const id = useMemo(() => {
        const pathLength = location.pathname.length;
        return location.pathname.slice(pathLength - 1)
    }, [location])


    const getDetailProduct = async (pId) => {
        try {
            const resp = await productApi.getDetailProduct(pId)
            setInfo(resp)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetailProduct(id)
    }, [id])

    console.log('info', info)
    return (
        <div>
           {
               info && (
                   <>
                   <p>Tên sản phẩm: {info.product_name}</p>
                   <p>Giá sản phẩm: {info.price}</p>
                   <p>Tổng sản phẩm: {info.quantity}</p>
                   </>
               )
           }
        </div>
    );
};

export default ProductDetail;