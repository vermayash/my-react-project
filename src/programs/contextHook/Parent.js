import BooksContext from "./contexts/books";

import Child1 from "./Child1";
import Child2 from "./Child2";
import { useEffect, useState } from "react";
import Button from "../../comps/Button";

const Parent = () => {
    const [val, setVal] = useState(0);

    const callBack = () => {
        setVal(val + 1);
    };
    // useEffect(() => {
    //     setVal(Math.random() * 100);
    // },[]);

    return (
        <div style={{"padding": "10px"}}>
            <h1>Context hook implementation</h1>
            <Button btnId="increaseVal" btnValue="Increase value" btnCallBack={callBack} />

            <BooksContext.Provider value={val}>
                <Child1 />
                <Child2 />
            </BooksContext.Provider>
        </div>
    );
};

export default Parent;