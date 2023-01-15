import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [addExpenseButton, setAddExpenseButton] = useState(true);

  const saveExpenseDataHandler = (formData) => {
    // hiding expense add form.
    setAddExpenseButton(!addExpenseButton);
    props.onAddExpense(formData);
  }

  const toggleExpenseForm = () => {
    setAddExpenseButton(!addExpenseButton);
  }

  if(addExpenseButton) {
    return (
      <div className='new-expense'>
        <div className='new-expense__actions'>
          <button onClick={toggleExpenseForm}>Add New Expense</button>
        </div>    
      </div>
    );
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
