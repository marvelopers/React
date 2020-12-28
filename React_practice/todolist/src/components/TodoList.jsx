import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(state => state.todo.todos);
    console.log(todos);

    return (
        <div>
            <h3>Todo List</h3>
            <ol>
                {todos.length ?
                    todos.map(todo => <li>{todo.title}</li>)
                    : <h3>할 일이 없습니다.</h3>}
            </ol>
        </div>
    )
}

export default TodoList;

