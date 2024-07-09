import Counter from "./programs/counter/Counter";
import Parent from "./programs/contextHook/Parent";
import TodoList from "./programs/todoList/TodoList";

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
            {/* <Counter />
            <Parent /> */}
            <TodoList />
        </div>
    );
};

export default App;