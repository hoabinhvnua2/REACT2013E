
import { start } from '@popperjs/core';
import {countAction} from '../constands/count'
 
const initialState ={
    count: 7
}
const count  = ( state = initialState , action )=>{
    switch (action.type) {
        case countAction.cong:
            
            return {...state,count : start.count +1}
    
        default:
           return{...state}
    }
}
export default count