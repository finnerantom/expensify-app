import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ***** Expenses - Action Generators, Reducers etc
// Action Generators
// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// ****  Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'EDIT_EXPENSE':
            const newState = state.map((expense) => (expense.id === action.id ? { ...expense, ...action.updates } : { expense }));
            return newState;
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        default:
            return state;
    }
}

// **** Filters - Action Generators, Reducers etc
// Action Generators
// SET_TEXT_FILTER
const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});
// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' };
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate };
        default:
            return state;
    }
}
// Get visable expenses
const getVisableExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toUpperCase().includes(text.toUpperCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'amount') {
            return a.amount < b.amount ? -1 : 1;
        } else if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? -1 : 1;
        }
    })
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);
// // Subscribe to store 
// store.subscribe(() => {
//     const state = store.getState();
//     const visableExpenses = getVisableExpenses(state.expenses, state.filters)
//     console.log(visableExpenses)
// });

// Add / Update / Delete Expenses
for (let x = 1; x <= 10; x++) {
    store.dispatch(addExpense({ description: 'Rent' + x, note: 'my rent ' + x, amount: x * 100 + 50, createdAt: x * 10 }));
    store.dispatch(addExpense({ description: 'Coffee' + x, note: 'another cup ' + x, amount: x * 100 + 25, createdAt: -x + 1 }));
    store.dispatch(addExpense({ description: 'Tea' + x, note: 'a pot please' + x, amount: x * -100, createdAt: x + 2 }));
    store.dispatch(addExpense({ description: 'Water' + x, note: 'glass no ice ' + x, amount: x * 50, createdAt: -x * 30 }));
}

// Subscribe to store 
store.subscribe(() => {
    const state = store.getState();
    const visableExpenses = getVisableExpenses(state.expenses, state.filters)
    console.log(visableExpenses)
});

// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 175, createdAt: 2 }));
// const expenseThree = store.dispatch(addExpense({ description: 'Tea', amount: 150, createdAt: 3 }));
// const expenseFour = store.dispatch(addExpense({ description: 'Water', amount: 50, createdAt: 4 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 250 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());
// store.dispatch(setTextFilter());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'dahgadhf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: 0,
        endDate: 9999999
    }
};
