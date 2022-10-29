import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    todoSelector,
    markCompleted,
    deleteTodo,
} from '../../store/reducers/todoSlice';
import TodoForm from './TodoForm';

const Todo = () => {

    const todos = useSelector(todoSelector);
    const dispatch = useDispatch();

    const toggleTodoCompleted = (id) => {
        dispatch(markCompleted(id));
    }

    const deleteSingleTodo = (idTodo) => {
        dispatch(deleteTodo(idTodo));
    }

    // useEffect(() => {
    //     dispatch(getTodos())
    // }, [])

    return (
        <div className="list-todo">

            <TodoForm />
            {
                todos && todos.length > 0 && todos.map((item, index) => (

                    < div key={index} className={item.completed ? "done-todo" : "todo-item"} > {item.title}
                        < input
                            type="checkbox"
                            className='float-end'
                            checked={item.completed}
                            onChange={() => toggleTodoCompleted(item.id)}
                        />
                        {item.completed ?
                            <button
                                type="button"
                                className='btn btn-dark float-end'
                                onClick={() => deleteSingleTodo(item.id)}
                            >Delete</button>
                            : ""}
                    </div>

                ))
            }
        </div >
    );
};

export default Todo;