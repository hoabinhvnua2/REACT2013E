import React, {useState, useEffect, useMemo} from 'react';


// để tạo đc component Product, cần tạo ra 
// 1 function componet

const Product = () => {
    const [count, setCount] = useState('React')
    return(
        <div>
            <p>{`Tôi là ${count}`}</p>
        </div>
    )
}

export default Product;