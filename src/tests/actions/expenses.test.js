import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
  });
});

test('should create an edit expense action object', () => {
    const action = editExpense('123abc', { description: 'my description', note: 'my note', amount: '12345678901', createdAt: 123456 })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'my description',
            amount: '12345678901',
            note: 'my note', 
            createdAt: 123456
        }
  });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'This was December rent.',
        amount: 80000,
        createdAt: 1576800000
    };
  const action = addExpense(expenseData);
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
    expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                note: '',
                amount: 0,
                createdAt: 0
            }
  });
});
