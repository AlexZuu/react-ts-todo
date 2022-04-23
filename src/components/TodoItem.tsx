import React, {FC} from 'react';
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void

}

const TodoItem: FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            {title}
            <button onClick={() => removeTodo(id)}>x</button>
        </div>
    );
};

export default TodoItem;
