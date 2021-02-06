import React, { useState } from "react";
import TodoItems from "./TodoItems";

function TodoList(props) {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const updateTasks = (event) => {
        event.preventDefault();
        if(input !== "") {
            setTasks(tasks.concat({
                text: input,
                key: Date.now()
            }))
        }   
        setInput("");
    };

    const deleteJob = (key) => {
        const filtered = tasks.filter(i => i.key !== key);
        setTasks(filtered);
    }

    return (
        <div className="todoListMain">
            <div className="header">
            <form onSubmit={updateTasks}>
                <input value={input}
                        placeholder="enter task" 
                        onChange={(event) => {setInput(event.target.value)}}>
                </input>
                <button type="submit">Add</button>
            </form>
            </div>
            <TodoItems entries={tasks} del={deleteJob} />
        </div>        
    );   
}
 
export default TodoList;