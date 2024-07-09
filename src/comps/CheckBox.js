import { useState } from "react";

const CheckBox = ({boxId, boxName, boxValue, boxText, callBack}) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div>
            <input 
                type="checkbox" 
                id={boxId} 
                name={boxName} 
                checked={isChecked}
                onChange={handleCheckChange}
                value={boxValue} />
            
            <label for={boxId}>
                {boxText}
            </label>
        </div>
    );
};

export default CheckBox;