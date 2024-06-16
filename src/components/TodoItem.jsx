import React from "react";

const TodoItem = () => {
    return (
        <li className="todo_item">
            <span>
                <input type="checkbox" />
                <span className="todo_item_text">Eat</span>
            </span>
            <p>...</p>
        </li>
    );
};
export default TodoItem;