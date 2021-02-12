import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./components/TodoList/TodoList";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const destination = document.querySelector("#container");

ReactDOM.render(
    <React.StrictMode>
        <TodoList/>
    </React.StrictMode>,
    destination
);

serviceWorkerRegistration.register();