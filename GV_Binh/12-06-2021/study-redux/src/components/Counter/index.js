
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onDecrement, onIncrement} from '../../redux/constants/Count';

const Count = () => {
    const state = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{ state.count }</p>
            <button onClick={() => dispatch(onIncrement())}>+</button>
            <button onClick={() =>  dispatch(onDecrement())}>-</button>
        </div>
    );
};

export default Count;