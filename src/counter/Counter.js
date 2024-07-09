import { useState } from "react";
import Button from "../comps/Button";

const Counter = () => {
    const [count, setCount] = useState(0);

    const onCountInc = () => {
        setCount(count + 1);
    };

    const onReset = () => {
        setCount(0);
    };

    return (
        <div style={{"padding": "12px"}}>
            <h1>Counter</h1>
            <h2 style={{"padding": "5px"}}>{count}</h2>
            <Button btnId="addOne" btnValue="Add One" btnCallBack={onCountInc} />
            <Button btnId="reset" btnValue="Reset value" btnCallBack={onReset} />
            
        </div>
    );
};

export default Counter;