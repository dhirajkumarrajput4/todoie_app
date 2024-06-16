import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(1);
    // const [value, setValue] = useState("");
    console.log(count);

    return (
        <div>
            <p>Count Value : {count}</p>
            <p>Number is : {count % 2 === 0 ? "Even" : "Odd"}</p>
            {/* <p>Value is : {value} </p> */}
            <button onClick={()=>setCount(count + 1)}>Increment</button>
            <button onClick={()=>setCount(count - 1)}>Decrement</button>

            {/* <button onClick={count%2===0 ? ()=>setValue("Even") : ()=>setValue("Odd")}>Check Value</button> */}
        </div>
    );

};
export default Counter;