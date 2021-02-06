import React from "react";
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

export default TodoItems;