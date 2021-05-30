import React ,{ useState } from 'react'




function App3(){
    const [ count , setcount] = useState(5)
    return(
        <div>
            <p> {count} </p>

            <button onClick = {()=> setcount( c => c+1)}>+</button>
            <button onClick = {()=> setcount( c => c-1)}>-</button>
           

        </div>
    )
}
export default App3;