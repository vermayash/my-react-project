import Counter from "./counter/Counter";

const App = () => {
    return (
        <div>
            <style>{`
                *{
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
            `}
            </style>
            <span style={{"fontSize": "48px"}}>My programs</span>
            <Counter />
        </div>
    );
};

export default App;