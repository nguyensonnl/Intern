import React, { useState } from 'react';
import { addTodo } from '../../store/reducers/todoSlice';
import { useDispatch } from 'react-redux';

const TodoForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const addSingleTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(title));
        setTitle('');
    }

    return (
        <>
            <form onSubmit={addSingleTodo}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <input type="submit" className="btn btn-primary mb-3" />
            </form>
        </>
    );
};

export default TodoForm;