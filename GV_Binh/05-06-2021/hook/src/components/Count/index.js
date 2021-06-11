import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { CountContext } from '../../common/CountContext';

const Count = () => {
    const {state, dispatch} = useContext(CountContext);
    const [name, setName] = useState('hi')
    // useMemo
    // useCallback
    const showName = () => {
        console.log(1)
    }

    const username = () => {
        return 'hello'
    }

    const rez = useRef(15)

   useCallback(() => {
    showName()
   }, [])

   const user = useMemo(() => username(), [name]);
   console.log('us', user);

    useEffect(() => {
        console.log('c')
    }, [])
    console.log('v');

    return (
        <div>
            <p>{rez.current}</p>
            <p>{state.count}</p>
            <button onClick={() => setName('React')}>set</button>
            <button onClick={() => dispatch({type: 'cong'})}>+</button>
            <button onClick={() => dispatch({type: 'tru'})}>-</button>

        </div>
    );
};

export default Count;

console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
}, 0);
console.log(4)