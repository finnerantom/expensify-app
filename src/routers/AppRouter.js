import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useHistory} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = (props) => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />}></Route>
            <Route path="/create" element={<AddExpensePage />}></Route>
            <Route path="/edit/:id" element={<EditExpensePage />}></Route>
            <Route path="/help" element={<HelpPage />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    </BrowserRouter>
);

// AppRouter.defaultProps = {
//     count: 10,
//     text: 'count'
// }

export default AppRouter;
