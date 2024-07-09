const Button = ({btnId, btnValue, btnCallBack}) => {
    return (
        <div style={{"padding": "5px"}}>
            <input 
                type="button"
                style={{"padding": "5px"}}
                id={btnId} 
                value={btnValue} 
                onClick={btnCallBack} />
        </div>
    );
};

export default Button;