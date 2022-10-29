import React from 'react';
import Todo from './Todo';
import "./ReduxTodo.scss";
import TodoTitle from './TodoTitle';

const ReduxTodo = () => {
    return (
        <div className='todo-app'>
            <TodoTitle />
            <Todo />
        </div>
    );
};

export default ReduxTodo;