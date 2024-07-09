const Button = ({btnId, btnValue}) => {
    const doThis = () => console.log("Btn pressed");

    return (
        <div>
            <input type="button" id={btnId} value={btnValue} onClick={doThis} />
        </div>
    );
};

export default Button;