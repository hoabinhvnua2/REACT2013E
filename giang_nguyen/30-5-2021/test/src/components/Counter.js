import React, { useState } from 'react';

// function component
// class component
const Count = () => {
    // Tạo ra state riêng cho component
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Count;