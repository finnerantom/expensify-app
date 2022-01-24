import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Create Expenses</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
);

export default Header;