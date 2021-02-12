import React, { useState, useEffect } from "react";
import { set, get } from 'idb-keyval';
import FlipMove from "react-flip-move";
import "./TodoList.css";

/*  Component returning unordered list of inputted items;
    each item can be deleted by clicking on it.
    props:
      a) del: function deleting item from the list
      b) entries: array of items to render */
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

// Main component of the app
function TodoList() {
    const [tasks, setTasks] = useState([]);                    // array of items to list with their identification keys
    const [input, setInput] = useState("");                    // current input

    useEffect(() => {                                          // loading list from IndexedDB on page load
        get("tasks").then(value => setTasks(value ?? []));
    }, []); 

    const updateTasks = (event) => {                           // adding new item to the list
        event.preventDefault();
        if(input !== "") {
            const date = Date.now();
            setTasks(tasks.concat({
                text: input,
                key: date
            }))
            set("tasks", tasks.concat({
                text: input,
                key: date
            }));
        }   
        setInput("");
    };

    const deleteJob = (key) => {                                // deleting an item using its key  
        const filtered = tasks.filter(i => i.key !== key);
        setTasks(filtered);
        set("tasks", filtered);
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