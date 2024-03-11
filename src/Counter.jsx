import { useState } from "react";


const Counter = () => {

    const [count, setCount]=useState(0);   

    const handleIncrease=()=>{
        const newCount=count+1;
        setCount(newCount);
     
    };

    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
     

    }
    
    return (
        <div style={{border:'2px solid yellow ', padding: '10px'}}> 

            <h2>Counter: {count}</h2>            
            <button onClick={handleIncrease} >Increment</button> 
            <button onClick={handleReduce} >Decrement</button> 
            
        </div>
    );
};

export default Counter;