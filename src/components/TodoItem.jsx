import React from "react";

const TodoItem = (props) => {
    return (
        <li className="todo_item">
            <span>
               {props.completed ? <></> : <input type="checkbox" /> }
                <span className="todo_item_text">{props.text}</span>
            </span>
            <p>...</p>
        </li>
    );
};
export default TodoItem;