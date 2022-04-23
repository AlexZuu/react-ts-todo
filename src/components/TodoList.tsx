import React from 'react';
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, removeTodo, toggleTodo} = props
    return (
        <div>
            {
                items.map(todo => (
                    <TodoItem removeTodo={removeTodo} toggleTodo={toggleTodo} key={todo.id} {...todo} />)
                )
            }
        </div>
    );
};

export default TodoList;
