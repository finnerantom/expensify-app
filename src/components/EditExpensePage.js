import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';

const EditExpensePage = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(location.pathname.split("/edit/")[1], expense));
                    navigate('/');
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                navigate('/');
            }}>Remove</button>

        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expense: state.expenses.find((expense) => expense.id === location.pathname.split("/edit/")[1])
    }
};

export default connect(mapStateToProps)(EditExpensePage);