import { useState } from "react";
import CheckBox from "../../comps/CheckBox";
import Button from "../../comps/Button";

const TodoList = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleBtnCallBack = () => {
        setTasks([...tasks, task]);
        setTask('');
    };

    const handleResetBtn = () => {
        setTask('');
        setTasks([]);
    };

    const renderedTasks = tasks.map((task, index) => {
        return <CheckBox boxId={index} boxValue={task} boxName={task} boxText={task} />;
    });

    return (
        <div style={{ "padding": "10px" }}>
            <h1>To-do List</h1>
            <div>
                {renderedTasks}
            </div>
            <div>
                <div style={{"padding": "5px"}}>
                    <input type="text" id="task" value={task} onChange={handleInputChange} />
                </div>
                <div>
                    <Button btnId="addTask" btnValue="Add Task" btnCallBack={handleBtnCallBack} />
                    <Button btnId="reset" btnValue={"Reset Tasks"} btnCallBack={handleResetBtn} />
                </div>
            </div>
        </div>
    );
};

export default TodoList;