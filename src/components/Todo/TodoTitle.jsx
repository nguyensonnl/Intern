import React from 'react';

import { useSelector } from 'react-redux';
import { todoSelector } from '../../store/reducers/todoSlice';

const TodoTitle = () => {
    const todos = useSelector(todoSelector);
    return (
        <div className='nav-todo'>
            <h2 className='title'>My Redux App Todos</h2>
            <ul className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {todos.length}</li>
            </ul>
        </div>
    );
};

export default TodoTitle;