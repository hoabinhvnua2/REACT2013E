import React, { useReducer } from 'react';

// hook API: useContext
// hook API: useReduce

const initialState = {
    count: 0,
    name: 'React',
    age: 20
}

// Tạo context
const CountContext = React.createContext(initialState);

const reducer = (state, action) => {
    const {type} = action;
    switch (type) {
        case 'cong':
            return {...state, count: state.count + 1}
        case 'tru':
            return {...state, count: state.count - 1}
        default:
            return {...state}
    }
}

const CountProvider = ({children}) => {
    // useReduce dùng để dispatch action và cập nhật lại state
    // gồm 2 tham số truyền 1 là function reduce, initialState
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <CountContext.Provider value={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    )
}

export {CountContext, CountProvider}


