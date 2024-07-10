import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
            `}</style>
            <span style={{ fontSize: "48px" }}>My programs</span>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/counter">Counter</Link>
                            </li>
                            <li>
                                <Link to="/context">Context</Link>
                            </li>
                            <li>
                                <Link to="/todoList">To-do List</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/context" element={<Parent />} />
                        <Route path="/todoList" element={<TodoList />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
