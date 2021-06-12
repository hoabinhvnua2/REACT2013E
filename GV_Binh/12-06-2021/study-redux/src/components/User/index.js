import React from 'react';
import { useSelector } from 'react-redux';

const User = () => {
    const state = useSelector(state => state.user)

    console.log('state', state);
    return (
        <div>
            <p>Xin chào các bạn lớp React</p>
        </div>
    );
};

export default User;