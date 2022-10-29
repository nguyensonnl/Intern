import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../containers/Home';
import ReduxTodo from '../components/Todo/ReduxTodo';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Redux" element={<ReduxTodo />} />
        </Routes>
    );
};

export default Router;