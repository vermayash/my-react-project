import Button from "./comps/Button";

const App = () => {
    const btnValue = "First Button";
    const btnId = "testBtn"
    return (
        <div>
            <h1>This works!</h1>

            <Button btnId={btnId} btnValue={btnValue} />
        </div>
    );
};

export default App;