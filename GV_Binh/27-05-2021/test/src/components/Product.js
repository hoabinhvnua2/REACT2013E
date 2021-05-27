import React from 'react';


// để tạo đc component Product, cần tạo ra 
// 1 function componet

const Product = ({name}) => {
    return(
        <div>
            <p>{`Tôi là ${name}`}</p>
        </div>
    )
}

export default Product;