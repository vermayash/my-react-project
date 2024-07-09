const Button = ({ btnId, btnValue, btnCallBack }) => {
    return (
        <input
            type="button"
            style={{ "padding": "5px", "margin": "5px" }}
            id={btnId}
            value={btnValue}
            onClick={btnCallBack} />
    );
};

export default Button;