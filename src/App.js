import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData, 'grand parent');
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses />
    </div>
  );
}

export default App;
