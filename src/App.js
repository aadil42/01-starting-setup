import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
// importing unique id package.
import { v4 as uuidv4 } from 'uuid';


const initialExpense = [
  {
    id: uuidv4(),
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: uuidv4(), 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: uuidv4(),
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuidv4(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: uuidv4(),
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  }
];

const App = () => {

  // app data.
  const [expenses, setExpenses] = useState(initialExpense);
  
  const addExpenseHandler = (expenseData) => {
    expenseData.id = uuidv4();
    setExpenses(expenses => [expenseData, ...expenses]);
  }
  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
