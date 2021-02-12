import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";

function TodoItems(props) {
    const del = (key) => props.del(key);

    const items = props.entries.map(i => 
        <li onClick={() => del(i.key)}
            key={i.key}>{i.text}</li>);

    return (
      <div className="itemList">
          <ul>
            <FlipMove duration={250} easing="ease-out">
              {items}
            </FlipMove>
          </ul>
      </div>  
    );
}

function TodoList(props) {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    const updateTasks = (event) => {
        event.preventDefault();
        if(input !== "") {
            const date = Date.now();
            setTasks(tasks.concat({
                text: input,
                key: date
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